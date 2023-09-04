// express instance
const express = require("express");
const { signup } = require("../Controller/authController");
// router instance
const authRouter = express.Router();

authRouter.post("/signup", signup);

module.exports = authRouter;
