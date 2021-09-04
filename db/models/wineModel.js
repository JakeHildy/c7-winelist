const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Wine must have a Title!"],
    unique: true,
  },
  uploadedAt: { type: Number, default: Date.now() },
  type: { type: String, required: [true, "A Wine must have a Type!"] },
  varietal: { type: String, required: [true, "A Wine must have a Varietal!"] },
  country: String,
  vintage: String,
  winery: String,
  price: Number,
  uploader: String,
  likes: Number,
  image: String,
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
