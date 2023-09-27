"use client";
import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { Router, useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const [Name, setName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Email, setEmail] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();
    const contract = await getEthereumContract();
    try {
      // Call the addContact function
      const tx = await contract.addContact(Name, PhoneNo, Email);

      // Wait for the transaction to be mined
      await tx.wait();

      console.log("Contact added successfully!");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const getEthereumContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x1C9284715FaE8E62EdAEf6f909a9fE4D4734C77B",
        '[ { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "phoneNo", "type": "string" }, { "indexed": false, "internalType": "string", "name": "email", "type": "string" } ], "name": "ContactAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "email", "type": "string" } ], "name": "EmailUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" } ], "name": "NameUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "phoneNo", "type": "string" } ], "name": "PhoneUpdated", "type": "event" }, { "inputs": [ { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "phoneNo", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" } ], "name": "addContact", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAllContact", "outputs": [ { "components": [ { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "phoneNo", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" } ], "internalType": "struct Contact.Details[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getContact", "outputs": [ { "components": [ { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "phoneNo", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" } ], "internalType": "struct Contact.Details", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "personDetails", "outputs": [ { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "phoneNo", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "email", "type": "string" } ], "name": "updateEmail", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "name", "type": "string" } ], "name": "updateName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "phoneNo", "type": "string" } ], "name": "updatePhone", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]',
        signer
      );
      return contract;
    } catch (error) {
      console.log(error);
    }
  };

  const listenForEvent = async () => {
    const contract = await getEthereumContract();

    contract.on("ContactAdded", (userAddress, name, phoneNo, email, event) => {
      console.log("Contact Added Event Received:");
      console.log("User Address:", userAddress);
      console.log("Name:", name);
      console.log("Phone Number:", phoneNo);
      console.log("Email:", email);
      console.log("Transaction Hash:", event.transactionHash);
      console.log("Block Number:", event.blockNumber);

      let postData = {
        userAddress: userAddress,
        name: name,
        email: email,
        phoneNo: phoneNo,
      };

      axios
        .post("http://localhost:3000/contact/details", postData)
        .then((respone) => {
          console.log(respone);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    contract.on("EmailUpdated", (userAddress, email) => {
      console.log("Contact Added Event Received:");
      console.log("User Address:", userAddress);
      console.log("Email:", email);
    });

    contract.on("NameUpdated", (userAddress, name) => {
      console.log("Contact Added Event Received:");
      console.log("User Address:", userAddress);
      console.log("Name:", name);
    });

    contract.on("PhoneUpdated", (userAddress, phoneNo) => {
      console.log("Contact Added Event Received:");
      console.log("User Address:", userAddress);
      console.log("PhoneNo:", phoneNo);
    });

    console.log("Listening for events...");
  };

  useEffect(() => {
    listenForEvent();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form className="form">
        <input
          placeholder="Enter Name"
          type="text"
          value={Name}
          style={{
            width: "243px",
            height: "34px",
            borderRadius: "10px",
            backgroundColor: "black",
            marginTop: "25px",
          }}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Enter Phone Number"
          type="text"
          value={PhoneNo}
          style={{
            width: "243px",
            height: "34px",
            borderRadius: "10px",
            backgroundColor: "black",
            marginTop: "10px",
          }}
          onChange={(e) => setPhoneNo(e.target.value)}
        ></input>
        <input
          placeholder="Enter Email Id"
          type="text"
          value={Email}
          style={{
            width: "243px",
            height: "34px",
            borderRadius: "10px",
            backgroundColor: "black",
            marginTop: "10px",
          }}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button
          style={{
            width: "243px",
            height: "34px",
            borderRadius: "10px",
            backgroundColor: "black",
            marginTop: "10px",
          }}
          onClick={(e) => handleContact(e)}
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default page;
