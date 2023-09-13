const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.mongo_url)
    .then((conn) => {
      console.log(`connected to db :${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
