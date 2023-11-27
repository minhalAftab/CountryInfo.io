const axios = require("axios");
const express = require("express");
const router = express.Router();

const parseCountryInfo = (data) => {
  const countryinfodata = data[0];
  const languages = Object.keys(countryinfodata.languages).map(
    (key) => countryinfodata.languages[key]
  );
  const currency = Object.keys(countryinfodata.currencies)[0];
  const parsedData = {
    name: countryinfodata.name.common,
    region: countryinfodata.region,
    flag: countryinfodata.flags.png,
    capital: countryinfodata.capital[0],
    population: countryinfodata.population,
    languages: languages,
    currencies: countryinfodata.currencies[currency].name,
    center: {
      lat: countryinfodata.latlng[0],
      lng: countryinfodata.latlng[1],
    },
  };

  return {
    status: 200,
    data: parsedData,
    fullcountryinfo :countryinfodata
  };
};

// api call to get information of country
router.get("/country/:name", (req, res) => {
  // Get name of country from the req object
  const countryName = req.params.name;
  axios
    .get(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => res.send(parseCountryInfo(response.data)))
    .catch((error) => res.send({ status: 404, msg: "Country not Found!!" }));

});

module.exports = router;
