const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_id: { type: String, unique: true, required: true },
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: false },
    seller: { type: Boolean, required: false },
    buyer: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
