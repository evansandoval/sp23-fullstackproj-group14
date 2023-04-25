const express = require("express");
const user = require("./routes/user");
const image = require("./routes/image")
const bodyParser = require("body-parser")
const InitiateMongoServer = require("./config/db");
const cors = require('cors')

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4001; //use a different port for backend


// Middleware
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());


app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *

app.use("/user", user);
app.use("/image", image);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
