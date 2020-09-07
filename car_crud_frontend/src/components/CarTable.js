import React, { useState } from "react";
import Table from "react-bootstrap/Table";

//Icons imports
// import addIcon from "../icons/add.svg";
import { ReactComponent as RemoveIcon } from "../icons/remove.svg";
import { ReactComponent as EditIcon } from "../icons/edit.svg";

//Components impots
import ClickableIcon from "./ClickableIcon";
import ConfirmationDialog from "./ConfirmationDialog";

const makeTableHeader = (car) => {
  const removeAttUnderscore = (key) => key.slice(1);
  const formatAttsForHeaders = (key) => {
    const underscoreRemoved = removeAttUnderscore(key);
    const spaceBetweenLowerAndUppercaseAdded = underscoreRemoved.replace(
      /([a-z])([A-Z])/g,
      "$1 $2"
    );
    return spaceBetweenLowerAndUppercaseAdded.replace(
      /([A-Z])([A-Z])/g,
      "$1 $2"
    );
  };

  return (
    <thead>
      <tr>
        <th>#</th>
        {Object.keys(car)
          .slice(1)
          .map((carAttKey, index) => (
            <th key={index} className="text-capitalize text-center">
              {formatAttsForHeaders(carAttKey)}
            </th>
          ))}
        <th className="text-center">Actions</th>
      </tr>
    </thead>
  );
};

const makeCarRow = (
  car,
  carsIndex,
  handleShowModal,
  setSelectedCar,
  confirmRemove
) => (
  <tr key={carsIndex + "car-table" + car.id}>
    {Object.values(car).map((carAttValue, attsIndex) => {
      if (attsIndex === 0) {
        return <td key={attsIndex}>{carsIndex + 1}</td>;
      }
      return <td key={attsIndex}>{carAttValue}</td>;
    })}
    <td className="d-flex justify-content-between">
      <ClickableIcon
        IconComponent={RemoveIcon}
        fillColor="#FFF"
        onClickCallback={() => {
          confirmRemove(car);
        }}
        classes="table-icons remove-icon"
      />
      <ClickableIcon
        IconComponent={EditIcon}
        fillColor="#FFF"
        onClickCallback={() => {
          setSelectedCar(car);
          handleShowModal();
        }}
        classes="table-icons edit-icon"
      />
    </td>
  </tr>
);

const makeTableBody = (
  cars,
  handleShowModal,
  setSelectedCar,
  confirmRemove
) => (
  <tbody>
    {cars.map((car, index) =>
      makeCarRow(car, index, handleShowModal, setSelectedCar, confirmRemove)
    )}
  </tbody>
);

const CarTable = ({ cars, setCars, handleShowModal, setSelectedCar }) => {
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

  return (
    <div className="mx-5 my-2" id="car-table">
      <Table striped bordered hover responsive variant="dark">
        {makeTableHeader(cars[0])}
        {makeTableBody(cars, handleShowModal, setSelectedCar, confirmRemove)}
      </Table>
      <ConfirmationDialog
        showConfirmDialog={showConfirmDialog}
        setShowConfirmDialog={setShowConfirmDialog}
        dialogQuestion={dialogQuestion}
        callbackRemove={removeCar}
      />
    </div>
  );
};

export default CarTable;
