const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, required: true },
    bookid: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("purchaseSchema", purchaseSchema);
