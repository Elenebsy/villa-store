const mongoose = require("mongoose");

// Define the Review schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property", // Reference to the Product model
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the Review model
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
