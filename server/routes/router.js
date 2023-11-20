const axios = require("axios");
const express = require("express");
const router = express.Router();

const parseCountryInfo = (data) => {
  const countryinfordata = data[0];
  const languages = Object.keys(countryinfordata.languages).map(
    (key) => countryinfordata.languages[key]
  );
  const currency = Object.keys(countryinfordata.currencies)[0];
  const parsedData = {
    name: countryinfordata.name.common,
    region: countryinfordata.region,
    flag: countryinfordata.flags.png,
    capital: countryinfordata.capital[0],
    population: countryinfordata.population,
    languages: languages,
    currencies: countryinfordata.currencies[currency].name,
    center: {
      lat: countryinfordata.latlng[0],
      lng: countryinfordata.latlng[1],
    },
  };

  return {
    status: 200,
    data: parsedData
  };
};

// api call to get information of country
router.get("/country/:name", (req, res) => {
  // Get name of country from the req object
  const countryName = req.params.name;
  axios
    .get(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => res.send(parseCountryInfo(response.data)))
    .catch((error) => res.send({status:404,msg:"Country not Found!!"}));

});

module.exports = router;
