import React from "react";

import { Modal } from "react-bootstrap";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./EditModal.scss";

import EditForm from "../../organisms/EditForm";
import { H1 } from "../../atoms/Headlines";
import { Icon } from "../../atoms/Icon";

const EditModal = ({ visibility, closeEdit }) => {
  return (
    <Modal show={visibility} onHide={closeEdit} dialogClassName="modalWindow">
      <Modal.Header>
        <H1>_food_name_</H1>
        <Icon icon={faTimes} onClick={closeEdit} />
      </Modal.Header>
      <Modal.Body>
        <EditForm />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
