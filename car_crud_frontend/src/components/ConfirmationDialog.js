import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { ReactComponent as ConfirmIcon } from "../icons/confirm.svg";
import { ReactComponent as CancelIcon } from "../icons/cancel.svg";

import ClickableIcon from "./ClickableIcon";

const ConfirmationDialog = ({
  showConfirmDialog,
  setShowConfirmDialog,
  dialogQuestion,
  callbackRemove,
}) => {
  const cancel = () => {
    setShowConfirmDialog(false);
  };

  const confirm = () => {
    callbackRemove();
    setShowConfirmDialog(false);
  };

  return (
    <Modal
      show={showConfirmDialog}
      onHide={cancel}
      size="lg"
      aria-labelledby="confirmation-modal-centered"
      centered
    >
      <Modal.Header
        closeButton
        className="bg-danger border-bottom border-success"
      >
        <Modal.Title id="confirmation-modal-centered">
          Please confirm your action
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <h3>{dialogQuestion}</h3>
      </Modal.Body>
      <Modal.Footer className="bg-dark border-top border-success">
        <Button
          className="cancel-car-form-btn mr-2"
          variant="primary"
          onClick={cancel}
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
          onClick={confirm}
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
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationDialog;
