//creating model for user
const mongoose = require("mongoose");
//creating user schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

//creating and exporting the user model
module.exports = mongoose.model("User", userSchema);
