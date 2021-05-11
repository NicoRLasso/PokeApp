import { ListGroup } from "react-bootstrap";
import React, { Component } from "react";

export default class StatsPokemon extends Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.pokemon.stat.name} : {this.props.pokemon.base_stat}
      </ListGroup.Item>
    );
  }
}
