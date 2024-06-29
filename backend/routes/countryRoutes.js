const express = require("express");
const router = express.Router();
const { getCountryDetails } = require("../controllers/countryController");
const verifyToken = require("../utils/verifyToken");

router.get("/:currencyCode", verifyToken, getCountryDetails);

module.exports = router;
