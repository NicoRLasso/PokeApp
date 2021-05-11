import React, { Component } from "react";
import { Row, Col, Image, Form, Card, ListGroup } from "react-bootstrap";
import Loader from "../components/Loader";
import PokemonCard from "../components/PokemonCard";
import { render } from "react-dom";
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const json = await response.json();
    this.setState({ data: json });
    this.buscarpokemon = this.buscarpokemon.bind(this);
    this.renderpokemon = this.renderpokemon.bind(this);
  }
  buscarpokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => this.renderpokemon(data));
  }
  renderpokemon(data) {
    const appDiv = document.getElementById("cardforPokemon");
    render(<PokemonCard pokemon={data} />, appDiv);
  }
  render() {
    const selectpokemon = (e) => {
      let id = e.target.value;
      this.buscarpokemon(id);
    };
    return (
      <Row>
        <Col md={6} xs={12}>
          <h3>
            En esta pagina encontraras lo relacionado a los POKEMONS. Te
            invitamos a descubrir que mas caracteristicas pueden tener estos
            fieles compañeros.
          </h3>
          <Row>
            <h4 className="text-info"> Checa estos Amigos de aca</h4>
            <Col md={4} xs={4}>
              <Image
                src="../../static/images/poke1.png"
                alt="poke1"
                fluid
                rounded
              />
            </Col>
            <Col md={4} xs={4}>
              <Image
                src="../../static/images/poke2.png"
                alt="poke2"
                fluid
                rounded
              />
            </Col>
            <Col md={4} xs={4}>
              <Image
                src="../../static/images/poke3.png"
                alt="poke3"
                fluid
                rounded
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={12}>
          <Row>
            <h3>
              Quieres Conocer mas?
              <br /> Hay mas de {this.state.data.count} pokemos por descrubrir
              <Form.Control
                as="select"
                custom
                id="escoPokemon"
                onChange={selectpokemon}
              >
                {[...Array(this.state.data.count).keys()].map((x) => (
                  <option value={x + 1} key={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Form.Control>
            </h3>
          </Row>
          <Row id="cardforPokemon">
            <Loader />
          </Row>
        </Col>
      </Row>
    );
  }
}
