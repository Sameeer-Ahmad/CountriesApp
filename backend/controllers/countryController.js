const axios = require("axios");

exports.getCountryDetails = async (req, res) => {
  const { currencyCode } = req.params;
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/currency/${currencyCode}`
    );
    const countries = response.data.map((country) => ({
      name: country.name.common,
      currency: currencyCode,
      countryCode: country.cioc,
      capital: country.capital ? country.capital[0] : "N/A",
      languages: Object.values(country.languages).join(", "),
      flag: country.flags.png,
    }));
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: "Error fetching country details" });
  }
};
