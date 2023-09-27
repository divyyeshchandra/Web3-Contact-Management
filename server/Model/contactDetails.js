const mongoose = require("mongoose");

const db_link =
  "mongodb+srv://{MongoDb password}@rewardscluster.nbanmhm.mongodb.net/ContactDB";

mongoose
  .connect(db_link)
  .then((db) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Schema
const userSchema = mongoose.Schema({
  UserAddress: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
});

//Modal
const userModal = mongoose.model("contactcollections", userSchema);

module.exports = userModal;
