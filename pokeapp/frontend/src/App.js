import React, { Component } from "react";
import HomeScreen from "./screens/HomeScreen";
import PokeScreen from "./screens/PokeScreen";
import { render } from "react-dom";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/pokemonlist" component={PokeScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
