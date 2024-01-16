const express = require("express");
const app = express();

app.use("/", (req, res) => res.status(200).json({ data: "jWTauth Server" }));

module.exports = app;
