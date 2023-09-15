// import express from "express";
// you need "type:module" in package.json
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db.js");

//Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// init connection to db
connectDB();

// importing routes here
const userRoutes = require("./routes/userRoutes.js");
app.use("/", userRoutes);

module.exports = app;
