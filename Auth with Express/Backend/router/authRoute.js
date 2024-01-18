const express = require("express");
const authrouter = express.Router();

// router me (konsa path , controller ki need )
authrouter.post("/signup");

module.exports = authrouter;
