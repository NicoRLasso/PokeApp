import React from "react";
import { Card, ListGroup } from "react-bootstrap";
function PokemonCard({ data }) {
  return (
    <Card>
      <ListGroup>
        <ListGroup.Item>{data.ablities}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PokemonCard;
