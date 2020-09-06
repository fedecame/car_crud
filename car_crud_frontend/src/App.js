import React from "react";
import "./styles/App.scss";

//React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const App = () => (
  <Container fluid>
    <Row className="justify-content-around">
      <Col className="text-center" md={4}>
        1 of 1
      </Col>
      <Col className="text-center" md={4}>
        <Button variant="secondary"> Dark variant</Button>
      </Col>
    </Row>
  </Container>
);

export default App;
