import React from "react";

import { Modal } from "react-bootstrap";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FoodModal.scss";

import FoodForm from "../../organisms/FoodForm";
import { H1 } from "../../atoms/Headlines";
import { Icon } from "../../atoms/Icon";
import { ModalTypeEnum } from "../../pages/FoodDetailPage";

const FoodModal = ({ visibility, type, closeEdit }) => {
  return (
    <Modal show={visibility} onHide={closeEdit} dialogClassName="modalWindow">
      <Modal.Header>
        {type === ModalTypeEnum.ADD_FOOD ? (
          <H1>Add food</H1>
        ) : (
          <H1>_food_name_</H1>
        )}
        <Icon icon={faTimes} onClick={closeEdit} />
      </Modal.Header>
      <Modal.Body>
        <FoodForm type={type} />
      </Modal.Body>
    </Modal>
  );
};

export default FoodModal;
