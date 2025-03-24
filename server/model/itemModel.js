import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String, // Changed from Number to String
    required: true,
  },
  image: {
    type: String, // New field for storing image file path
    required: false,
  },

  stock: {
    type: Number, // New field for stock quantity
    required: true,
    default: 0, // Default stock is 0
  },
},
{ timestamps: true }
);

export default mongoose.model("Items", itemSchema);
