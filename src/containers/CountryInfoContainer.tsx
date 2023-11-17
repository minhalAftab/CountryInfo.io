import React from "react";
import SearchCountry from "../components/SearchCountry";
import CountryInfo from "../components/CountryInfo";

const CountryInfoContainer = (props: any) => {
  return (
    <>
      <SearchCountry />
      <CountryInfo />
    </>
  );
};

export default CountryInfoContainer;
