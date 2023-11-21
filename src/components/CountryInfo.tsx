import React from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Stack,
  Spinner,
} from "react-bootstrap";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { CountryInfoProps } from "../models/models";
import "../styles/common.css";
import CountryNotFound from "./CountryNotFound";
import { HTTP_STATUS_CODE } from "../models/enums";
import { GOOGLE_MAPS_API_KEY } from "../models/constants";
import InfoCard from "./InfoCard";
import InfoRow from "./InfoRow";
import ErrorLoadingMap from "./ErrorLoadingMap";

const mapContainerStyle = {
  height: "65vh",
};

const loadingComponent = () => {
  return (
    <Container className="full-height align-center">
      <Spinner animation="border" />
    </Container>
  );
};

const CountryInfo = (props: CountryInfoProps) => {
  const { parsedCountryInfo, loading } = props;
  const { status, data: countryInfoData, msg } = parsedCountryInfo;

  console.log(loading);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded || loading) {
    return loadingComponent();
  }

  if (status == HTTP_STATUS_CODE.NOT_FOUND) {
    return <CountryNotFound />;
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
            <InfoCard header={"Capital"} content={countryInfoData.capital} />
          </Col>
          <Col lg={3}>
            <InfoCard
              header={"Population"}
              content={countryInfoData.population}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <InfoRow
              header={"Languages"}
              content={countryInfoData.languages.join(", ")}
            />
          </Col>
          <Col>
            <InfoRow
              header={"Currencies"}
              content={countryInfoData.currencies}
            />
          </Col>
        </Row>
      </Stack>
      {/* Map */}
      <Row>
        <Col>
          {loadError ? (
            <ErrorLoadingMap />
          ) : (
            <div className="mt-4">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={6}
                center={countryInfoData.center}
              >
                <Marker position={countryInfoData.center} />
              </GoogleMap>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountryInfo;
