const express = require("express");
const cors = require("cors");
const contact = require("./Routers/contactRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/contact", contact.router);

const start = async () => {
  app.listen(3000, () => {
    console.log("App Started");
  });
};

start();
