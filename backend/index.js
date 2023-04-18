const express = require("express");
const user = require("./routes/user");
const shop = require("./routes/shop")
const bodyParser = require("body-parser")
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *

app.use("/user", user);
app.use("/shop", shop)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
