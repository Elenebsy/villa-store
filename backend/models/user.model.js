const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: false },
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userSchema);