import React from "react";
import CountryNotFoundImage from "../assets/countryNotFound.png";
import { Col, Container, Image, Row } from "react-bootstrap";

const CountryNotFound = (props: any) => {
  return (
    <Container className="full-height align-center">
      <Row>
        <Col>
          <Image src={CountryNotFoundImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default CountryNotFound;
