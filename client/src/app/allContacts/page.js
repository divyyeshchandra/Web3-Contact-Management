"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/contact/details"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "100px",
      }}
    >
      <h2>All Users Details</h2>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            style={{
              width: "1434px",
              height: "77px",
              background: "#2D2273",
              margin: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "23px",
              }}
            >
              <text>{`User Address: ${item.UserAddress}`}</text>
              <text>{`Name: ${item.Name}`}</text>
              <text>{`Email: ${item.email}`}</text>
              <text>{`Phone No${item.PhoneNo}`}</text>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default page;
