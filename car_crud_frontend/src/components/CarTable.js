import React from "react";
import Table from "react-bootstrap/Table";

//Icons imports
// import addIcon from "../icons/add.svg";
import { ReactComponent as RemoveIcon } from "../icons/remove.svg";
import { ReactComponent as EditIcon } from "../icons/edit.svg";

//Components impots
import ClickableIcon from "./ClickableIcon";

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
        {Object.keys(car).map((carAttKey, index) => (
          <th key={index} className="text-capitalize text-center">
            {formatAttsForHeaders(carAttKey)}
          </th>
        ))}
        <th className="text-center">Actions</th>
      </tr>
    </thead>
  );
};

const makeCarRow = (car, index) => (
  <tr key={index}>
    <td>{index + 1}</td>
    {Object.values(car).map((carAttValue, index) => (
      <td key={index}>{carAttValue}</td>
    ))}
    <td className="d-flex justify-content-between">
      <ClickableIcon
        IconComponent={RemoveIcon}
        fillColor="#FFF"
        onClickCallback={() => console.log("remove current car")}
        classes="table-icons remove-icon"
      />
      <ClickableIcon
        IconComponent={EditIcon}
        fillColor="#FFF"
        onClickCallback={() => console.log("edit current car")}
        classes="table-icons edit-icon"
      />
    </td>
  </tr>
);

const makeTableBody = (cars) => (
  <tbody>{cars.map((car, index) => makeCarRow(car, index))}</tbody>
);

const CarTable = ({ cars }) => {
  return (
    <div className="mx-5 my-2">
      <Table striped bordered hover responsive variant="dark">
        {makeTableHeader(cars[0])}
        {makeTableBody(cars)}
      </Table>
    </div>
  );
};

export default CarTable;
