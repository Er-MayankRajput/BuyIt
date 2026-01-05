const express = require("express");
const app = express();

//Middleware to parse JSON requests
app.use(express.json());

//importing routes
const product = require("./routes/product");
//Using routes
app.use("/api/v1", product);

module.exports = app;
