import React from "react";
import SearchCountry from "../components/SearchCountry";
import CountryInfo from "../components/CountryInfo";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/common.css";

const CountryInfoContainer = (props: any) => {
  return (
    <Container fluid>
      <Row className="full-height">
        <Col
          lg={5}
          className="align-center"
          style={{
            // backgroundColor: "green",
          }}
        >
          <SearchCountry />
        </Col>
        <Col lg={7}>
          <CountryInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default CountryInfoContainer;
