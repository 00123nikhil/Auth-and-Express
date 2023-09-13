import app from "./app";
import mongoose from "mongoose";

const port = 3000;

// database connection - mongodb
// by using iife
// one professional approach you can say it
(async () => {
  try {
    // db connection
    await mongoose.connect("dbstring");

    app.on("error", (err) => {
      console.log(`error :`, err);
      throw err;
    });

    const onListening = () => {
      console.log(`listening on port ${port}`);
    };

    app.listen(port, onListening);
  } catch (err) {
    // catch block
    console.error("Error :", err);
    throw err;
  }
})();

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
