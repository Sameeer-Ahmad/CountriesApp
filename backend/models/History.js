const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  searches: [{ type: String }],
});

module.exports = mongoose.model("History", HistorySchema);
