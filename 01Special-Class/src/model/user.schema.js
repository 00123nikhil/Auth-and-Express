import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    // mongoose provides us as following way
    type: String,
    required: [true, "Name is required"],
    maxLength: [50, "Name should be 50 characters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  username: {
    type: String,
    unique: true,
  },
  age: Number,
});

// export your schema
export default mongoose.model("User", UserSchema);
//in () req 2 values

/* Notes:
schema like a table 
*/
