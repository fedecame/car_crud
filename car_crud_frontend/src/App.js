import React from "react";
import "./styles/App.scss";

//React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Car from "./components/Car";

//Components imports
import CarTable from "./components/CarTable";
import NewCarModal from "./components/NewCarModal";

const App = () => {
  const cars = [
    new Car("Chevrolet", "Corsa", "Light Grey", "ASD 123"),
    new Car("Fiat", "Siena", "Black", "FFF 333"),
    new Car(
      "MarcaXKJASHDKJSHKD",
      "ModeloALSDJLASDJLADJS",
      "ColorLADJOAISDJALSD",
      "PATENTE ALSDJALSDJLASDJLASDJLASDJLKAS"
    ),
  ];

  return (
    <Container>
      <Row className="pt-3">
        <Col>
          <header className="text-center">
            <h1 className="site-title">Car Manager</h1>
          </header>
        </Col>
      </Row>

      <Row>
        <Col>
          <NewCarModal />
        </Col>
      </Row>

      <Row>
        <Col>
          <CarTable cars={cars} />
        </Col>
      </Row>

      <Row className="justify-content-around">
        <Col className="text-center" md={4}>
          1 of 1
        </Col>
        <Col className="text-center" md={4}>
          <Button variant="secondary"> Dark variant</Button>
        </Col>
      </Row>
      {/* <footer>
        <div>
          Iconos diseñados por{" "}
          <a
            href="https://www.flaticon.es/icono-gratis/seguro_832824"
            title="Kiranshastry"
          >
            Kiranshastry
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.es/" title="Flaticon">
            www.flaticon.es
          </a>
        </div>
      </footer> */}
    </Container>
  );
};

export default App;
