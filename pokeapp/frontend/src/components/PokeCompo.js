import React from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";

function PokeCompo({ poke }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={poke.imagensprite} fluid />
      <Card.Body>
        <Card.Title as="div">
          <strong>{poke.nombre}</strong>
        </Card.Title>
        <Card.Text as="div">
          <Row>
            <Col md={6} xs={12}>
              <ListGroup>
                <ListGroup.Item>Pokemon #{poke.idpokemon}</ListGroup.Item>
                <ListGroup.Item>Nombre: {poke.nombre}</ListGroup.Item>
                <ListGroup.Item>
                  Peso: {Number(poke.peso) / 10} Kilogramos
                </ListGroup.Item>
                <ListGroup.Item>
                  Altura: {Number(poke.altura) * 10} Centimetros
                </ListGroup.Item>
                <ListGroup.Item>
                  Tipo: {poke.tipo.replace(/'\[,\],\",\''/, "")}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} xs={12}>
              <ListGroup>
                <ListGroup.Item>hp: {poke.hp}</ListGroup.Item>
                <ListGroup.Item>attack: {poke.attack}</ListGroup.Item>
                <ListGroup.Item>defense: {poke.defense}</ListGroup.Item>
                <ListGroup.Item>
                  specialAttack: {poke.specialAttack}
                </ListGroup.Item>
                <ListGroup.Item>
                  specialDefense: {poke.specialDefense}
                </ListGroup.Item>
                <ListGroup.Item>speed: {poke.speed}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default PokeCompo;
