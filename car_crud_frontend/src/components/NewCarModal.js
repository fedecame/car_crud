import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { ReactComponent as AddIcon } from "../icons/add.svg";

import ClickableIcon from "./ClickableIcon";

export default function NewCarModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="mx-5 my-2 float-right font-weight-bold add-car-btn"
        variant="info"
        onClick={handleShow}
      >
        Add New Car
        <Badge>
          <ClickableIcon
            IconComponent={AddIcon}
            fillColor="#FFF"
            classes="table-icons add-icon"
          />
        </Badge>
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header
          closeButton
          className="bg-info border-bottom border-warning"
        >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          Woohoo, you're reading this text in a modal!
        </Modal.Body>
        <Modal.Footer className="bg-dark border-top border-success">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
