// import express from "express";
// you need "type:module" in package.json
const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./config/db.js");

// init connection to db
connectDB()

app.get("/", (req, res) => {
  res.send("Hello world!");
});

module.exports = app;
