const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sizes: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("products", ProductSchema);
