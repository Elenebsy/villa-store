const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema(
  {
    user_id: { type: String, unique: true, required: true },
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: false },
    street: { type: String, required: true },
    city: { type: String, required: true},
    state: { type: String, required: true},
    zipCode: { type: String, required: false },
    },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Seller",sellerSchema);
