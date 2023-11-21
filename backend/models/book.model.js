const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: false },
    stock: { type: String, required: false },
    categories: { type: Array, required: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("book", bookSchema);
