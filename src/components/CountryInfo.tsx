import React from "react";
import { Col, Container, Row, Image, Card, Stack } from "react-bootstrap";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { CountryInfoProps } from "../models/models";
import "../styles/common.css";

const mapContainerStyle = {
  height: "65vh",
};

const CountryInfo = (props: CountryInfoProps) => {
  const { parsedCountryInfo } = props;
  const { status, data: countryInfoData, msg } = parsedCountryInfo;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCJs1hNcXYdT3GcD3SkkNmdbVehrs5X3lw",
    libraries: ["places"],
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  if (!parsedCountryInfo) {
    return <></>;
  }

  if (status == 404) {
    return <div>{msg}</div>;
  }

  return (
    <Container>
      <Stack gap={4}>
        <Row>
          <Col>
            {/* Heading */}
            <h1 className="mt-5">{countryInfoData.name}</h1>
            <Card.Title>Country in {countryInfoData.region}</Card.Title>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={3}>
            <Image
              className="shadow-sm "
              bsPrefix="img"
              style={{
                width: 245.22,
                height: "10rem",
              }}
              rounded
              src={countryInfoData.flag}
            />
          </Col>
          <Col lg={3}>
            <Card style={{ height: "10rem" }} className="shadow-sm">
              <Card.Body>
                <Card.Title>Capital:</Card.Title>
                <h2
                  className="text-center"
                  style={{
                    color: "cadetblue",
                  }}
                >
                  {countryInfoData.capital}
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card style={{ height: "10rem" }} className="shadow-sm  ">
              <Card.Body>
                <Card.Title>Population:</Card.Title>
                <h2
                  className="text-center "
                  style={{
                    color: "cadetblue",
                  }}
                >
                  {countryInfoData.population}
                </h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Stack direction="horizontal" gap={3}>
              <Card.Title>Languages:</Card.Title>
              <h2
                style={{
                  color: "cadetblue",
                }}
              >
                {countryInfoData.languages.join(", ")}
              </h2>
            </Stack>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <Card.Title>Currencies:</Card.Title>
              <h2
                style={{
                  color: "cadetblue",
                }}
              >
                {countryInfoData.currencies}
              </h2>
            </Stack>
          </Col>
        </Row>
      </Stack>
      <Row>
        <Col>
          <div className="mt-4">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={6}
              center={countryInfoData.center}
            >
              <Marker position={countryInfoData.center} />
            </GoogleMap>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CountryInfo;
