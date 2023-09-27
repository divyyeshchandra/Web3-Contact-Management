// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Contact{

    struct Details {
        string name;
        string phoneNo;
        string email;
    }

    mapping(address => Details) public personDetails;
    address[] private accounts;

    event ContactAdded(address indexed userAddress, string name, string phoneNo, string email);
    event EmailUpdated(address indexed userAddress, string email);
    event NameUpdated(address indexed userAddress, string name);
    event PhoneUpdated(address indexed userAddress, string phoneNo);

    function addContact(string memory name, string memory phoneNo, string memory email) external {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(bytes(phoneNo).length > 0, "Not a valid phone number");
        require(bytes(email).length > 0, "Not a valid email id");
        Details memory person = Details(name, phoneNo, email);
        personDetails[msg.sender] = person;
        accounts.push(msg.sender);

        emit ContactAdded(msg.sender, name, phoneNo, email); // Emit the event
    }

    function updateName(string memory name) external {
        require(bytes(personDetails[msg.sender].phoneNo).length > 0, "This address does not exist");
        require(bytes(name).length > 0, "Name cannot be empty");
        personDetails[msg.sender].name = name;

        emit NameUpdated(msg.sender, name); // Emit the event
    }

    function updatePhone(string memory phoneNo) external {
        require(bytes(personDetails[msg.sender].phoneNo).length > 0, "This address does not exist");
        require(bytes(phoneNo).length > 0, "Not a valid phone number");
        personDetails[msg.sender].phoneNo = phoneNo;

        emit PhoneUpdated(msg.sender, phoneNo); // Emit the event
    }

    function updateEmail(string memory email) external {
        require(bytes(personDetails[msg.sender].phoneNo).length > 0, "This address does not exist");
        require(bytes(email).length > 0, "Not a valid email id");
        personDetails[msg.sender].email = email;

        emit EmailUpdated(msg.sender, email); // Emit the event
    }

    function getContact() view external returns(Details memory){
        require(bytes(personDetails[msg.sender].phoneNo).length>0,"This address does not exist");
        return personDetails[msg.sender];
    }

    function getAllContact() view external returns (Details[] memory) {
         Details[] memory array = new Details[](accounts.length);
        for(uint i = 0; i < accounts.length; i++){
            array[i] = personDetails[accounts[i]];
        }
        return array;
    }

}