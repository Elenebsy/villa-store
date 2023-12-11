const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
  {
    user_id: { type: String, required: true },
    property_id: { type: String,unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("purchase", purchaseSchema);
