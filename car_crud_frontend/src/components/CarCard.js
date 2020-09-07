import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

//Icons imports
// import addIcon from "../icons/add.svg";
import { ReactComponent as RemoveIcon } from "../icons/remove.svg";
import { ReactComponent as EditIcon } from "../icons/edit.svg";

//Components impots
import ClickableIcon from "./ClickableIcon";

const CarCard = ({
  card,
  pairIndex,
  handleShowModal,
  setSelectedCar,
  confirmRemove,
}) => {
  const bgContrast = (pairIndex) =>
    pairIndex === 0 ? "bg-primary" : "bg-success";

  return (
    <Card className="mb-4" bg={pairIndex === 0 ? "success" : "primary"}>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item
            action
            className="d-flex justify-content-between bg-dark text-white"
          >
            <strong>Brand:</strong> <span>{card.brand}</span>
          </ListGroup.Item>
          <ListGroup.Item
            action
            className={`d-flex justify-content-between ${bgContrast(
              pairIndex
            )} text-white`}
          >
            <strong>Model:</strong> <span>{card.model}</span>
          </ListGroup.Item>
          <ListGroup.Item
            action
            className="d-flex justify-content-between bg-dark text-white"
          >
            <strong>Color:</strong> <span>{card.color}</span>
          </ListGroup.Item>
          <ListGroup.Item
            action
            className={`d-flex justify-content-between ${bgContrast(
              pairIndex
            )} text-white`}
          >
            <strong>License Plate:</strong> <span>{card.licensePlate}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-around">
        <Button
          className="remove-car-btn"
          variant={pairIndex === 0 ? "primary" : "success"}
          onClick={() => confirmRemove(card)}
        >
          <strong>Remove</strong>
          <Badge>
            <ClickableIcon
              IconComponent={RemoveIcon}
              fillColor="#FFF"
              classes="table-icons remove-icon"
            />
          </Badge>
        </Button>
        <Button
          className="edit-car-btn"
          variant="secondary"
          onClick={() => {
            setSelectedCar(card);
            handleShowModal();
          }}
        >
          <strong>Edit</strong>
          <Badge>
            <ClickableIcon
              IconComponent={EditIcon}
              fillColor="#FFF"
              classes="table-icons edit-icon"
            />
          </Badge>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CarCard;
