const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contactController");
router
  .route("/details")
  .post(contactController.postContactDetails)
  .get(contactController.getContactDetails);
module.exports = { router };
