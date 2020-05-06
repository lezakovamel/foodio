import React from "react";

import { Modal } from "react-bootstrap";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FoodModal.scss";

import FoodForm from "../../organisms/FoodForm";
import { H1 } from "../../atoms/Headlines";
import { Icon } from "../../atoms/Icon";
import { ModalTypeEnum } from "../../../tools/Enums";
import { P } from "../../atoms/TextFields";

const FoodModal = ({ visibility, type, closeEdit }) => {
  const title = () => {
    switch (type) {
      case ModalTypeEnum.ADD_FOOD:
        return "Add food";
      case ModalTypeEnum.EDIT_FOOD:
        return "__food_name__";
      case ModalTypeEnum.NOT_LOGGED:
        return "Error";
      default:
        break;
    }
  };
  return (
    <Modal show={visibility} onHide={closeEdit} dialogClassName="modalWindow">
      <Modal.Header>
        <H1>{title()}</H1>
        <Icon icon={faTimes} onClick={closeEdit} />
      </Modal.Header>
      <Modal.Body>
       {type !== ModalTypeEnum.NOT_LOGGED ?  <FoodForm type={type} />: <P>
         Please, log in for saving your favourite foods.</P>}
      </Modal.Body>
    </Modal>
  );
};

export default FoodModal;
