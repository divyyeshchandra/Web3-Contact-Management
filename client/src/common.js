// // let connectedAccount = "Divyyesh Account";
// let abi = [
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "userAddress",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "phoneNo",
//         type: "string",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "email",
//         type: "string",
//       },
//     ],
//     name: "ContactAdded",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "userAddress",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "email",
//         type: "string",
//       },
//     ],
//     name: "EmailUpdated",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "userAddress",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//     ],
//     name: "NameUpdated",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "userAddress",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "phoneNo",
//         type: "string",
//       },
//     ],
//     name: "PhoneUpdated",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "phoneNo",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "email",
//         type: "string",
//       },
//     ],
//     name: "addContact",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     name: "personDetails",
//     outputs: [
//       {
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "phoneNo",
//         type: "string",
//       },
//       {
//         internalType: "string",
//         name: "email",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "email",
//         type: "string",
//       },
//     ],
//     name: "updateEmail",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//     ],
//     name: "updateName",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "phoneNo",
//         type: "string",
//       },
//     ],
//     name: "updatePhone",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];
// let contractAddress = "0xb5d1fef5b2bc1355bb33dcd6c144a9f079396d63";
