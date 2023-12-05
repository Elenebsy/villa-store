const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    userId: { type: String, unique: true, required: true },
    cardName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    cvv: { type: String, required: true },
    expirationDate: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", CardSchema);
