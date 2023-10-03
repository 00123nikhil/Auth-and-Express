// server init
const express = require("express");
const app = express();

// use to parse req.body in express -> put or post
const bodyParser = require("body-parser");

// speciaficly parse json data and add it to the req.body object
app.use(bodyParser.json());

// activite the server on port
app.listen(3000, () => {
  console.log(`Server is running on port :3000`);
});

// routes
app.get("/", (request, response) => {
  response.send("Alabasta Arc ");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully.");
});

// mongoose
// connecting local mongoCompass
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/BD01", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("error found", error);
  });
