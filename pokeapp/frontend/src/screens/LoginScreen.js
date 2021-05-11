import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

function LoginScreen({ location, history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  return (
    <FormContainer>
      <h1>Sign in</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
          <Form.Label>Nombre de Uruario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Introducir Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" varian="primary">
          Ingresar
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Nuevo Poke Amigo ?{" "}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            className="btn"
          >
            Redistrate
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
