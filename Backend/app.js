const express = require("express");
const app = express();
const authRouter = require("./Router/authRoute");

app.use(express.json());

app.use("/api/auth/", authRouter);

app.use("/", (req, res) => {
  res.status(200).json({ data: "jwtAuth Server updated" });
});

// exproting
module.exports = app;
