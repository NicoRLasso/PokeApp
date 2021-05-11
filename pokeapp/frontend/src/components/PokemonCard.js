import { Card, Col, ListGroup, Row, Image, Button } from "react-bootstrap";
import Message from "./Message";
import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { render } from "react-dom";
export default class PokemonCard extends Component {
  constructor() {
    super();
    this.agregarPokemon = this.agregarPokemon.bind(this);
  }

  agregarPokemon = () => {
    let bodypost = {
      nombre: this.props.pokemon.name,
      idpokemon: this.props.pokemon.id,
      peso: this.props.pokemon.weight,
      altura: this.props.pokemon.height,
      tipo: this.props.pokemon.types.map((tipo) => tipo.type.name + " "),
      hp: this.props.pokemon.stats[0].base_stat,
      attack: this.props.pokemon.stats[1].base_stat,
      defense: this.props.pokemon.stats[2].base_stat,
      specialAttack: this.props.pokemon.stats[3].base_stat,
      specialDefense: this.props.pokemon.stats[4].base_stat,
      speed: this.props.pokemon.stats[5].base_stat,
      imagensprite: this.props.pokemon.sprites.front_default,
    };
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodypost),
    };
    fetch("http://127.0.0.1:8000/api/addpokemon/", requestOptions).then(
      (response) => {
        const appDiv = document.getElementById("mensajeresponsebut");
        if (response.status == 403) {
          response.json().then((data) => {
            render(
              <Message variant="danger">No has Ingresado aun</Message>,
              appDiv
            );
          });
        } else if (response.status == 400) {
          response.json().then((data) => {
            render(<Message variant="danger">{data.detail}</Message>, appDiv);
          });
        } else {
          response.json().then((data) => {
            render(<Message variant="success">{data.detail}</Message>, appDiv);
          });
        }
      }
    );
  };
  render() {
    return (
      <Card>
        <Row>
          <Col md={4} xs={12}>
            <Image
              src={this.props.pokemon.sprites.front_default}
              alt={this.props.pokemon.name}
              className="marginimgshow"
              rounded
            />
          </Col>
          <Col md={4} xs={6}>
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
          <Col md={4} xs={6}>
            <ListGroup>
              {this.props.pokemon.stats.map((stats) => (
                <ListGroup.Item>
                  {stats.stat.name} : {stats.base_stat}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Button onClick={this.agregarPokemon}>Agregar a Pokemones</Button>
        <Row id="mensajeresponsebut">{this.props.empty}</Row>
      </Card>
    );
  }
}
