import React from "react";
import Modal from "react-bootstrap/Modal";

import CarForm from "./CarForm";

export default function CarModal({
  showModal,
  handleCloseModal,
  selectedCar,
  setCars,
}) {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      size="xl"
      backdrop="static"
    >
      <Modal.Header
        closeButton
        className="bg-info border-bottom border-warning"
      >
        <Modal.Title>{selectedCar ? "Edit Car" : "New Car"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <CarForm
          selectedCar={selectedCar}
          handleCloseModal={handleCloseModal}
          setCars={setCars}
        />
      </Modal.Body>
    </Modal>
  );
}
