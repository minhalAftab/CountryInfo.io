import React from "react";
import CountryInfoLogo from "../assets/countryinfologo.png";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { FaSearch } from "react-icons/fa";

const SearchCountry = (prop: any) => {
  const [countryName, setCountryName] = React.useState();

  const getCountryInfo = () => {
    axios
      .get(`http://localhost:4000/country/${countryName}`)
      .then((response) => console.log(response.data));
  };

  const handleForm = (e: any) => {
    setCountryName(e.target.value);
  };

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
          <Row>
            <Col lg="11">
              <Form.Control
                value={countryName}
                type="text"
                placeholder="e.g. Ireland"
                onChange={handleForm}
              />
            </Col>
            <Col lg="1">
              <Button variant="outline-primary" onClick={getCountryInfo}>
                <FaSearch className="mb-1" />
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};
export default SearchCountry;
