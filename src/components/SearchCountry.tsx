import React from "react";
import CountryInfoLogo from "../assets/countryInfoLogo.png";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, Col, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { FaSearch } from "react-icons/fa";
import { SeachCountryProps } from "../models/models";
import "../styles/common.css";
import { ENTER_KEY } from "../models/constants";

const SearchCountry = (props: SeachCountryProps) => {
  const [countryName, setCountryName] = React.useState("");
  const [isError, setError] = React.useState(false);
  const { setParsedCountryInfo, setLoading } = props;

  const getCountryInfo = () => {
    const trimedCountryName = countryName.trimStart();
    if (trimedCountryName.length > 0) {
      axios
        .get(`https://country-info-io.vercel.app/country/${trimedCountryName}`)
        .then((response) => {
          setLoading(false);
          setParsedCountryInfo(response.data);
          console.log(response.data);
        });
      setError(false);
      setLoading(true);
    } else {
      setError(true);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === ENTER_KEY) {
      e.preventDefault();
      getCountryInfo();
    }
  };

  const handleForm = (e: any) => {
    setCountryName(e.target.value);
  };

  return (
    <div className="main-background ">
      <img
        className="mb-3"
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
            <Stack direction="horizontal" gap={1}>
              <Col lg="11">
                <Form.Control
                  onKeyDown={handleKeyDown}
                  value={countryName}
                  type="text"
                  placeholder="e.g. Ireland"
                  onChange={handleForm}
                  isInvalid={isError}
                />
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
          <Row>
            {isError && (
              <div
                style={{
                  color: "red",
                }}
              >
                Please Enter a Valid Country Name
              </div>
            )}
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};
export default SearchCountry;
