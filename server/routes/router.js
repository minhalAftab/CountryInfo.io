const axios = require("axios");
const express = require("express");
const router = express.Router();

// api call to get information of country
router.get("/country/:name", (req, res) => {
  // Get name of country from the req object
  const countryName =  req.params.name
  axios
  .get(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((response) => res.send(response.data))
  .catch((error) => res.send("Country Not Found!"))


  // Do the api call for the country api given in doc
  

  // return the result of te api back to UI

});

module.exports = router;
