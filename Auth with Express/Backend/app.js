const express = require("express");
const app = express();
const authrouter = require("./router/authRoute");

app.use("/api/auth/", authrouter);

app.use("/", (req, res) => res.status(200).json({ data: "jWTauth Server" }));

module.exports = app;
