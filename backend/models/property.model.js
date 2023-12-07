const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    // user_id: { type: String,required: true },
    property_id: { type: Number, unique: true, required: true },
<<<<<<< HEAD
    user_id: { type: String,  required: true },
    catagory:{type: String,required: true },
=======
    category:{type: String,required: true },
>>>>>>> 43fa4cb1d2e3691f5ab5235b333f02a8237b8f44
    Out_ttitle:{type: String,required: true }, // (e.g Before clicking on property card)
    In_title:{type: String,required: true }, // (e.g After clicking on property card)
    description: {type: String, required: true}, 
    short_address:{type: String, required: true}, // (e.g Zed2000 , Mostakbal City, Egypt)
    type:{type: String,required: true }, //(e.g., house, apartment, commercial)
    sale_type:{type: String,required: true }, //(e.g.,Sale by Owner,Distressed Sale, Leasehold Sale, Probate Sale, Auction, Developer Sale, Resale)
    num_room: { type: Number, required: true },
    num_Bedrooms:{type: Number,required: true },
    num_Bathrooms:{type: Number,required: true },
    num_Floors:{type: Number,required: true }, 
    num_individuals: { type: Number, required: true }, 
    size:{type: String,required: true },
    country: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    num_house: { type: String, required: true },
    District: { type: String, required: true },
    Amenities: [{ type: String, required: false }], // (e.g., pool, garage, garden, Amenities: المميزات).
    price:{ type: Number, required: true },
    status:{type: String,required: true }, //(e.g., available, under contract, sold).
    availabilityDate:{type: String ,required: true }, // The date when the property will be available.
    image1: { type: String, required: true }, // Array of image URLs
    },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Property",propertySchema);
