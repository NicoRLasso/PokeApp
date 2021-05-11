import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import PokeCompo from "../components/PokeCompo";
import { render } from "react-dom";

export default class PokeScreen extends Component {
  constructor() {
    super();
    this.state = { pokemones: [] };
  }
  componentDidMount() {
    fetch("/api/getPoke")
      .then((response) => response.json())
      .then((data) => this.setState({ pokemones: data }));
  }
  render() {
    const { pokemones } = this.state;
    return (
      <Row>
        {pokemones.map((pokemon) => (
          <Col md={6} xs={12}>
            <PokeCompo poke={pokemon} />
          </Col>
        ))}
      </Row>
    );
  }
}
