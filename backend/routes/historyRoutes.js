const express = require("express");
const router = express.Router();
const { addSearch, getHistory } = require("../controllers/historyController");
const verifyToken = require("../utils/verifyToken");

router.post("/", verifyToken, addSearch);
router.get("/", verifyToken, getHistory);

module.exports = router;
