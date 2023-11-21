import React from "react";
import SearchCountry from "../components/SearchCountry";
import CountryInfo from "../components/CountryInfo";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/common.css";
import ExploreCountry from "../assets/landingPageImage.png"

const CountryInfoContainer = (props: any) => {
  const [parsedCountryInfo, setParsedCountryInfo] = React.useState(null);

  return (
    <Container fluid>
      <Row className="full-height">
        <Col lg={5} className="align-center shadow gradient">
          <SearchCountry setParsedCountryInfo={setParsedCountryInfo} />
        </Col>
        <Col lg={7}>
          {parsedCountryInfo ? (
            <CountryInfo parsedCountryInfo={parsedCountryInfo} />
          ) : (
            <div className="full-height align-center ">
              <img  src={ExploreCountry}/>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountryInfoContainer;
