import React from "react";
import { Card, Stack } from "react-bootstrap";
import { InfoRowProps } from "../models/models";

const InfoRow = (props: InfoRowProps) => {
  const { header, content } = props;
  return (
    <Stack direction="horizontal" gap={3}>
      <Card.Title>{header}:</Card.Title>
      <h2
        style={{
          color: "cadetblue",
        }}
      >
        {content}
      </h2>
    </Stack>
  );
};

export default InfoRow;
