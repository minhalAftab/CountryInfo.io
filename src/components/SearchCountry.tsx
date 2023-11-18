import React from "react";
import CountryInfoLogo from "../assets/countryinfologo.png";
import Form from "react-bootstrap/Form";

const SearchCountry = (prop: any) => {
  return (
    <div>
      <img
        className="mb-4"
         style={{
          height: 32,
        }}
        alt="country-info-logo"
        src={CountryInfoLogo}
      />

      <Form>
        <Form.Group>
          <Form.Label>Explore country insights with just a click!</Form.Label>
          <Form.Control type="text" placeholder="e.g. Ireland" />
        </Form.Group>
      </Form>
    </div>
  );
};
export default SearchCountry;
