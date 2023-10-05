const express = require("express");
const app = express();

// load config  from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
