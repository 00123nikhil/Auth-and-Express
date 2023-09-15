const express = require("express");
const {
  home,
  createUser,
  getUsers,
} = require("../Controllers/userController.js");

// routes creating
const router = express.Router();
// imported ka bhi use karlo
router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUsers);

// exporting routes
module.exports = router;
