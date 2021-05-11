import { Card, Col, ListGroup, Row } from "react-bootstrap";
import React, { Component } from "react";
import StatsPokemon from "./StatsPokemon";
export default class PokemonCard extends Component {
  render() {
    return (
      <Card>
        <Row>
          <Col md={6} xs={6}>
            <ListGroup>
              <ListGroup.Item>Pokemon #{this.props.pokemon.id}</ListGroup.Item>
              <ListGroup.Item>Nombre: {this.props.pokemon.name}</ListGroup.Item>
              <ListGroup.Item>
                Peso: {Number(this.props.pokemon.weight) / 10} Kilogramos
              </ListGroup.Item>
              <ListGroup.Item>
                Altura: {Number(this.props.pokemon.height) * 10} Centimetros
              </ListGroup.Item>
              <ListGroup.Item>
                Tipo:{" "}
                {this.props.pokemon.types.map((tipo) => tipo.type.name + " ")}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} xs={6}>
            <ListGroup>
              {this.props.pokemon.stats.map((stats) => (
                <StatsPokemon pokemon={stats} />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Card>
    );
  }
}
