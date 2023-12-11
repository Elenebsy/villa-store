const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    review: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    property_id: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
