import React from "react";
import SearchCountry from "../components/SearchCountry";
import CountryInfo from "../components/CountryInfo";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/common.css";
import ExploreCountry from "../assets/landingPageImage.png";

const CountryInfoContainer = (props: any) => {
  const [parsedCountryInfo, setParsedCountryInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <Container fluid className="gradient">
      <Row className="full-height">
        <Col lg={5} className="align-center  ">
          <SearchCountry
            setParsedCountryInfo={setParsedCountryInfo}
            setLoading={setLoading}
          />
        </Col>
        <Col lg={7} className={`${parsedCountryInfo? "shadow-sm": ""}`}>
          {parsedCountryInfo ? (
            <CountryInfo
              parsedCountryInfo={parsedCountryInfo}
              loading={loading}
            />
          ) : (
            <div className="full-height align-center ">
              <img src={ExploreCountry} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountryInfoContainer;
