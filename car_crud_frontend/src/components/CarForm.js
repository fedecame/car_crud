import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { ReactComponent as ConfirmIcon } from "../icons/confirm.svg";
import { ReactComponent as CancelIcon } from "../icons/cancel.svg";

import ClickableIcon from "./ClickableIcon";
import Car from "../objects/Car";

const CarForm = ({ selectedCar, handleCloseModal, setCars }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [invalidBrand, setInvalidBrand] = useState(false);
  const [invalidModel, setInvalidModel] = useState(false);
  const [invalidColor, setInvalidColor] = useState(false);
  const [invalidLicensePlate, setInvalidLicensePlate] = useState(false);
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (selectedCar) {
      setBrand(selectedCar.brand);
      setModel(selectedCar.model);
      setColor(selectedCar.color);
      setLicensePlate(selectedCar.licensePlate);
      setValidForm(true);
    }
  }, [selectedCar]);

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };

  const copyAttsToSelectedCar = () => {
    selectedCar.brand = brand;
    selectedCar.model = model;
    selectedCar.color = color;
    selectedCar.licensePlate = licensePlate;
  };

  const confirmEdit = (event) => {
    validateInputs();
    copyAttsToSelectedCar();
    setCars((prevCars) =>
      prevCars.map((car) => (car.id === selectedCar.id ? selectedCar : car))
    );
    handleCloseModal();
  };

  const confirmCreate = (event) => {
    validateInputs();
    const newCar = new Car(uuidv4(), brand, model, color, licensePlate);
    setCars((prevCars) => [...prevCars, newCar]);
    handleCloseModal();
  };

  const validateInputs = (event) => {
    if (
      brand &&
      brand.trim() &&
      model &&
      model.trim() &&
      color &&
      color.trim() &&
      licensePlate &&
      licensePlate.trim()
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  };

  const validateBrand = (event) => {
    if (event.target.value.trim()) {
      setInvalidBrand(false);
      validateInputs();
    } else {
      setInvalidBrand(true);
    }
  };

  const validateModel = (event) => {
    if (event.target.value.trim()) {
      setInvalidModel(false);
      validateInputs();
    } else {
      setInvalidModel(true);
    }
  };

  const validateColor = (event) => {
    if (event.target.value.trim()) {
      setInvalidColor(false);
      validateInputs();
    } else {
      setInvalidColor(true);
    }
  };

  const validateLicensePlate = (event) => {
    if (event.target.value.trim()) {
      setInvalidLicensePlate(false);
      validateInputs();
    } else {
      setInvalidLicensePlate(true);
    }
  };

  return (
    <Form noValidate>
      <Form.Group controlId="formCarBrand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter car's brand"
          value={brand || ""}
          onChange={handleBrandChange}
          onBlur={validateBrand}
          isInvalid={invalidBrand}
          isValid={brand && brand.trim()}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid car brand
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCarModel">
        <Form.Label>Model</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter car's model"
          value={model || ""}
          onChange={handleModelChange}
          onBlur={validateModel}
          isInvalid={invalidModel}
          isValid={model && model.trim()}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid car model
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCarColor">
        <Form.Label>Color</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter car's color"
          value={color || ""}
          onChange={handleColorChange}
          onBlur={validateColor}
          isInvalid={invalidColor}
          isValid={color && color.trim()}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid car color
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCarLicensePlate">
        <Form.Label>License Plate</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter car's license plate"
          value={licensePlate || ""}
          onChange={handleLicensePlateChange}
          onBlur={validateLicensePlate}
          isInvalid={invalidLicensePlate}
          isValid={licensePlate && licensePlate.trim()}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Please provide a valid car license plate
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button
          className="cancel-car-form-btn mr-2"
          variant="primary"
          onClick={handleCloseModal}
        >
          <span>Cancel</span>
          <Badge>
            <ClickableIcon
              IconComponent={CancelIcon}
              fillColor="#FFF"
              classes="table-icons cancel-icon"
            />
          </Badge>
        </Button>
        <Button
          className="confirm-car-form-btn ml-2"
          variant="success"
          disabled={!validForm}
          onClick={selectedCar ? confirmEdit : confirmCreate}
        >
          <span>Confirm</span>
          <Badge>
            <ClickableIcon
              IconComponent={ConfirmIcon}
              fillColor="#FFF"
              classes="table-icons confirm-icon"
            />
          </Badge>
        </Button>
      </div>
    </Form>
  );
};

export default CarForm;
