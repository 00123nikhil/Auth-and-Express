const express = require("express");
const {
  home,
  createUser,
  getUsers,
  deleteUser,
  editUser,
} = require("../Controllers/userController.js");

// routes creating
const router = express.Router();
// imported ka bhi use karlo
router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUsers);
router.put("/edituser/:id", editUser);
router.delete("/deleteuser/:id", deleteUser);

// exporting routes
module.exports = router;
