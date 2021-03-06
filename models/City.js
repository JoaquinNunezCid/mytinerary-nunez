const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  city: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  badge: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String }
});

const City = mongoose.model("city", citySchema);

module.exports = City;