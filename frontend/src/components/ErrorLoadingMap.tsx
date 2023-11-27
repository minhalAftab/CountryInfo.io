import React from "react";
import ErrorImage from "../assets/errorLoadingMap.png";
import { Card } from "react-bootstrap";
import "../styles/common.css";

const ErrorLoadingMap = () => {
  return (
    <Card
      className="full-height align-center pb-5  shadow-sm"
      style={{ marginTop: 65, backgroundColor: "#D9E9E9", height: "60vh" }}
    >
      <img style={{ height: "25vh" }} src={ErrorImage} />
    </Card>
  );
};

export default ErrorLoadingMap;
