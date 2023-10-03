const User = require("../models/userModel.js");

exports.home = (req, res) => {
  res.send("Hello world!");
};

exports.createUser = async (req, res) => {
  // extract info
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("Name and email are required");
    }
    // if user re-enter the same then handle
    const userExists = User.findOne({ email });
    if (userExists) {
      throw new Error("user already existed.");
    }

    const userRes = await User.create({
      name,
      email,
    });
    // send json res
    res.status(201).json({
      success: true,
      message: "User created Successfully",
      userRes,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await user.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).jso({
      success: false,
      message: "Error occurs",
    });
  }
};
/* 
dekho jo controller hai uske pass hote hai function wo directly app.js me ja sakte hai. but we not use like this.

instaed of we use routes and that routes can connect or communicate with app.js.
*/
