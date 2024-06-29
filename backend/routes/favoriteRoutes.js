const express = require("express");
const router = express.Router();
const {
  addFavorite,
  getFavorites,
} = require("../controllers/favoriteController");
const verifyToken = require("../utils/verifyToken");

router.post("/", verifyToken, addFavorite);
router.get("/", verifyToken, getFavorites);

module.exports = router;
