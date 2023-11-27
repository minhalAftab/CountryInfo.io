import React from "react";
import SearchCountry from "../components/SearchCountry";
import CountryInfo from "../components/CountryInfo";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/common.css";
import ExploreCountry from "../assets/landingPageImage.png";

const CountryInfoContainer = (props: any) => {
  const [parsedCountryInfo, setParsedCountryInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [fullCountryInfo,setFullCountryInfo] = React.useState({});

  return (
    <Container fluid className="gradient">
      <Row>
        <Col lg={5} className="align-center full-height ">
          <SearchCountry
            setParsedCountryInfo={setParsedCountryInfo}
            setLoading={setLoading}
            setFullCountryInfo = {setFullCountryInfo}
          />
        </Col>
        <Col lg={7} className={`${parsedCountryInfo? "shadow-sm": ""} full-height`}>
          {parsedCountryInfo ? (
            <CountryInfo
              parsedCountryInfo={parsedCountryInfo}
              loading={loading}
              fullCountryInfo = {fullCountryInfo}
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
