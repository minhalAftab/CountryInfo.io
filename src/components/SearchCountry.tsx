import React from "react";
import CountryInfoLogo from "../assets/countryinfologo.png";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Col, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { FaSearch } from "react-icons/fa";
import { SeachCountryProps } from "../models/models";
import "../styles/common.css";

const SearchCountry = (props: SeachCountryProps) => {
  const [countryName, setCountryName] = React.useState("");
  const { setParsedCountryInfo } = props;
  const [error, setError] = React.useState("");
  const getCountryInfo = () => {
    if (countryName.trimStart().length > 0) {
      axios
        .get(`http://localhost:4000/country/${countryName.trimStart()}`)
        .then((response) => {
          setParsedCountryInfo(response.data);
          console.log(response.data);
        });
      setError("");
    } else {
      setError("Empty");
    }
  };

  const handleForm = (e: any) => {
    setCountryName(e.target.value);
  };

  return (
    <div className="main-background ">
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
            <Stack direction="horizontal" gap ={1}>
              <Col lg="11">
                <Form.Control
                  value={countryName}
                  type="text"
                  placeholder="e.g. Ireland"
                  onChange={handleForm}
                />
                {error && <div>Please Enter A Name</div>}
              </Col>
              <Col lg="1">
                <Button variant="outline-none" onClick={getCountryInfo}>
                  <FaSearch
                    className="mb-1"
                    style={{
                      color: "cadetblue",
                      width: 24,
                      height: 24,
                    }}
                  />
                </Button>
              </Col>
            </Stack>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};
export default SearchCountry;
