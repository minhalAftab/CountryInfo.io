import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "70vh",
};


const CountryInfo = (props: any) => {
  const testCountryInfo = {
    name: "Pakistan",
    region: "Asia",
    flag: "https://flagcdn.com/w320/pk.png",
    capital: "Islamabad",
    population: 220892331,
    languages: ["Urdu", "Eng"],
    currencies: ["PKR"],
    center: {
      lat: 30,
      lng: 70,
    },
  };

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

  return (
    <Container>
      <Row>
        <Col>
          {/* Heading */}
          <h1>{testCountryInfo.name}</h1>
          <p>Country in {testCountryInfo.region}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div>
            <img
              style={{
                height: 100,
                width: 200,
                objectFit: "contain",
                // boxShadow: "borderbox",
              }}
              src={testCountryInfo.flag}
            />
          </div>
        </Col>
        <Col lg={4}>
          <div>
            <p>Capital:</p>
            <h1>{testCountryInfo.capital}</h1>
          </div>
        </Col>
        <Col lg={4}>
          <div>
            <p>Population:</p>
            <h1>{testCountryInfo.population}</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <p>Languages:</p>
          <h1>{testCountryInfo.languages.join(", ")}</h1>
        </Col>
        <Col>
          <p>Currencies:</p>
          <h1>{testCountryInfo.currencies.join(", ")}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={6}
              center={testCountryInfo.center}
            >
              <Marker position={testCountryInfo.center} />
            </GoogleMap>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CountryInfo;
