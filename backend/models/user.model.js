const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // user_id: { type: String, unique: false, required: false },
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    address: { type: String, required: false },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
