import React, { useState } from "react";

import CardDeck from "react-bootstrap/CardDeck";

import ConfirmationDialog from "./ConfirmationDialog";
import CarCard from "./CarCard";

const CarGrid = ({ cars, setCars, handleShowModal, setSelectedCar }) => {
  const [carToBeRemoved, setCarToBeRemoved] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [dialogQuestion, setDialogQuestion] = useState("");

  const confirmRemove = (newCarToBeRemoved) => {
    setCarToBeRemoved(newCarToBeRemoved);
    setDialogQuestion(
      `Do you confirm removing car with id ${newCarToBeRemoved.id}?`
    );
    setShowConfirmDialog(true);
  };

  const removeCar = () => {
    setCars((prevCars) =>
      prevCars.filter((car) => car.id !== carToBeRemoved.id)
    );
    setCarToBeRemoved(null);
  };

  const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr];
    if (chunkSize <= 0) return cache;
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
  };

  const rows = chunk(cars, 2);

  return (
    <>
      {rows.map((cards, index) => {
        return (
          <CardDeck key={index} id="car-grid">
            {cards.map((card, pairIndex) => (
              <CarCard
                key={index + "car-grid" + pairIndex}
                card={card}
                pairIndex={pairIndex}
                handleShowModal={handleShowModal}
                setSelectedCar={setSelectedCar}
                confirmRemove={confirmRemove}
              />
            ))}
          </CardDeck>
        );
      })}
      <ConfirmationDialog
        showConfirmDialog={showConfirmDialog}
        setShowConfirmDialog={setShowConfirmDialog}
        dialogQuestion={dialogQuestion}
        callbackRemove={removeCar}
      />
    </>
  );
};

export default CarGrid;
