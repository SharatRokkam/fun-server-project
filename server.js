// Common JS module
// require("dotenv").config();
const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to Amazon");
});

app.get("/mobile", (req, res) => {
  res.send("<h2>Mobile brands are here </h2>");
});

app.get("/laptop", (req, res) => {
  res.send("<h2>Laptop brands are here </h2>");
});

app.get("/charger", (req, res) => {
  res.send("<h2>Charger brands are here </h2>");
});

app.listen(port, () => {
  console.log(`server running on port 3000`);
});
