const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_id: { type: String, required: true },
    villa_id: { type: String, required: true },
    installment: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
