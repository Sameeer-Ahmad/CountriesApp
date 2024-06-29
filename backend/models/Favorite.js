const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  currency: { type: String, required: true },
  countryCode: { type: String, required: true },
  capital: { type: String, required: true },
  languages: { type: String, required: true },
  flag: { type: String, required: true },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
