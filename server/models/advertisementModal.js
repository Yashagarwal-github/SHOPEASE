const mongoose = require("mongoose");

// Define Advertisement Schema
const advertisementSchema = new mongoose.Schema({
  shop_name: String,
  number: String,
  email: String,
  image: String,
});

const Advertisement = mongoose.model("Advertisement", advertisementSchema);

module.exports = Advertisement;
