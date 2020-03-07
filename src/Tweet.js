import React from "react";
import { Card } from "react-bootstrap";

export function Tweet(props) {
  return (
    <Card className="mt-3">
      <Card.Header>{props.author}</Card.Header>
      <Card.Body>
        <Card.Text>{props.tweet}</Card.Text>
      </Card.Body>
    </Card>
  );
}
