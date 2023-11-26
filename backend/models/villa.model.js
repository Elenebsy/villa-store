const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villaSchema = new Schema(
  {
    villa_id: { type: String, unique: true, required: true },
    user_id: { type: String, unique: true, required: true },
    status_sale: { type: Boolean, required: false },
    price_sale: { type: Number, required: true },
    villa_adress: { type: String, required: true },
    num_room: { type: Number, required: true },
    num_bedroom: { type: Number, required: true },
    num_bathroom: { type: Number, required: true },
    Num_individuals: { type: Number, required: true },
    discount: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: array, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("villa", villaSchema);
