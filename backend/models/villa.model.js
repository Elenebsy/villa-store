const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villaSchema = new Schema(
  {
    villa_id: { type: String, unique: true, required: true },
    user_id: { type: String, unique: true, required: true },
    status_sale: { type: Boolean, required: true },
    price_sale: { type: Number, required: true },
    villa_adress: { type: String, required: true },
    installment_price: { type: String, required: false },
    installment_period: { type: String, required: false },
    num_room: { type: Number, required: true },
    num_bedroom: { type: Number, required: true },
    num_bathroom: { type: Number, required: true },
    Num_individuals: { type: Number, required: true },
    discount: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("villa", villaSchema);
