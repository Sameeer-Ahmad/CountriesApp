const Favorite = require("../models/Favorite");

exports.addFavorite = async (req, res) => {
  try {
    const obj = req.body;
    const userId = req.user.id;
    const favorite = new Favorite({ userId, ...obj });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({ error: "Error adding favorite" });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;
    const favorites = await Favorite.find({ userId });
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ error: "Error fetching favorites" });
  }
};
