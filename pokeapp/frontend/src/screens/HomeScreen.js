import React, { Component } from "react";
import Loader from "../components/Loader";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
export default class HomeScreen extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <h3>
            En esta pagina encontraras lo relacionado a los POKEMONS. Te
            invitamos a descubrir que mas caracteristicas pueden tener estos
            fieles compañeros
          </h3>
          <Row>
            <h4 className="text-info"> Checa estos Amigos de aca</h4>
            <Col md={4}>
              <Image
                src="../../static/images/poke1.png"
                alt="poke1"
                fluid
                rounded
              />
            </Col>
            <Col md={4}>
              <Image
                src="../../static/images/poke2.png"
                alt="poke2"
                fluid
                rounded
              />
            </Col>
            <Col md={4}>
              <Image
                src="../../static/images/poke3.png"
                alt="poke3"
                fluid
                rounded
              />
            </Col>
          </Row>
          <h4 className="text-info"> Quieres Conocer mas hay </h4>
        </Col>
        <Col md={6}></Col>
      </Row>
    );
  }
}
