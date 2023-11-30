const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    property_id: { type: Number, unique: true, required: true },
    name:{type: String,required: true },
    description: {type: String, required: true}, 
    type:{type: String,required: true }, //(e.g., house, apartment, commercial)
    num_room: { type: Number, required: true },
    num_Bedrooms:{type: Number,required: true },
    num_Bathrooms:{type: Number,required: true },
    num_Floors:{type: Number,required: true }, 
    num_individuals: { type: Number, required: true }, 
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: Number, required: false },
    features:{ type: String, required: false }, // (e.g., pool, garage, garden).
    price:{ type: Number, required: true },
    //currency:{ type: Number, required: true }, //The currency in which the price is specified.
    status:{type: String,required: true }, //(e.g., available, under contract, sold).
    availabilityDate:{type: Date,required: true }, // The date when the property will be available.
    images:{type: String, required:true}, 
    },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Property",propertySchema);
