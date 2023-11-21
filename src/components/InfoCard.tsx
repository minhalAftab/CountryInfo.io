import React from "react";
import { Card } from "react-bootstrap";
import { InfoCardProps } from "../models/models";

const InfoCard = (props: InfoCardProps) => {
  const { header, content } = props;
  return (
    <Card style={{ height: "10rem" }} className="shadow-sm">
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <h2
          className="text-center mt-4"
          style={{
            color: "cadetblue",
          }}
        >
          {typeof content === "number"
            ? content.toLocaleString("en-US")
            : content}
        </h2>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
