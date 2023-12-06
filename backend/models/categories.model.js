const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
  {
    KindOf_Categories:[ { type: String, required: true }] //(e.g )
  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categories", CategoriesSchema);
