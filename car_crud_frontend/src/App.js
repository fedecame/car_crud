import React, { useState, useEffect } from "react";
import "./styles/App.scss";

//React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Car from "./objects/Car";

//Components imports
import CarTable from "./components/CarTable";
import CarModal from "./components/CarModal";
import OpenModalButton from "./components/OpenModalButton";
import CarGrid from "./components/CarGrid";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  // const [cars, setCars] = useState([
  //   new Car("Chevrolet", "Corsa", "Light Grey", "ASD 123"),
  //   new Car("Fiat", "Siena", "Black", "FFF 333"),
  //   new Car(
  //     "Marca Inventada",
  //     "Modelo Inventado",
  //     "Color Inventado",
  //     "Patente Inventada"
  //   ),
  // ]);
  const [cars, setCars] = useState([]);

  const [selectedCar, setSelectedCar] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    const storedCars = localStorage.getItem("cars-react");
    if (storedCars) {
      setCars(JSON.parse(localStorage.getItem("cars-react")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cars-react", JSON.stringify(cars));
  }, [cars]);

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
          <CarModal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            selectedCar={selectedCar}
            setCars={setCars}
          />
        </Col>
      </Row>
      <Row>
        <Col
          className={`d-flex justify-content-${
            !cars.length ? "center" : "end"
          }`}
        >
          <OpenModalButton
            handleShowModal={handleShowModal}
            setSelectedCar={setSelectedCar}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {!!cars.length && (
            <CarTable
              cars={cars}
              setCars={setCars}
              handleShowModal={handleShowModal}
              setSelectedCar={setSelectedCar}
            />
          )}

          {!cars.length && (
            <div className="d-inline">
              <h4 className="text-center">
                No cars yet. You may want to add one
              </h4>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col className="mx-5 my-2">
          {!!cars.length && (
            <CarGrid
              cars={cars}
              setCars={setCars}
              handleShowModal={handleShowModal}
              setSelectedCar={setSelectedCar}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
