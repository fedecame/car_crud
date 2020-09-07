import React from "react";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import ClickableIcon from "./ClickableIcon";

import { ReactComponent as AddIcon } from "../icons/add.svg";

const OpenModalButton = ({ handleShowModal, setSelectedCar }) => {
  return (
    <Button
      className="mx-5 my-2 font-weight-bold open-add-car-btn"
      variant="info"
      onClick={() => {
        setSelectedCar(null);
        handleShowModal();
      }}
    >
      <span className="align-middle">Add New Car</span>
      <Badge>
        <ClickableIcon
          IconComponent={AddIcon}
          fillColor="#FFF"
          classes="table-icons add-icon"
        />
      </Badge>
    </Button>
  );
};

export default OpenModalButton;
