const { model } = require("mongoose");
const userModal = require("../Model/contactDetails");
const postContactDetails = async (req, res) => {
  console.log(req.body);
  let data = {
    UserAddress: req.body.userAddress,
    Name: req.body.name,
    email: req.body.email,
    PhoneNo: req.body.phoneNo,
  };
  let pushedData = await userModal.create(data);
  console.log(pushedData);
};

const getContactDetails = async (req, res) => {
  try {
    const allData = await userModal.find();
    res.json(allData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postContactDetails, getContactDetails };
