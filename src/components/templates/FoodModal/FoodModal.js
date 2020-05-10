import React from "react";

import { Modal } from "react-bootstrap";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FoodModal.scss";

import FoodForm from "../../organisms/FoodForm";
import { H1 } from "../../atoms/Headlines";
import { Icon } from "../../atoms/Icon";
import { ModalTypeEnum } from "../../../tools/Enums";
import { P } from "../../atoms/TextFields";

const FoodModal = ({ data, onClose }) => {
  const title = () => {
    switch (data.type) {
      case ModalTypeEnum.ADD_FOOD:
        return "Add food";
      case ModalTypeEnum.EDIT_FOOD:
        return "__food_name__";
      case ModalTypeEnum.NOT_LOGGED:
        return "Error";
      case ModalTypeEnum.FAV_ADDED:
        return "Yuch";
      default:
        break;
    }
  };
  return (
    <Modal show={data.visibility} onHide={onClose} dialogClassName="modalWindow">
      <Modal.Header>
        <H1>{title()}</H1>
        <Icon icon={faTimes} onClick={onClose} />
      </Modal.Header>
      <Modal.Body>
        {data.type === ModalTypeEnum.ADD_FOOD || data.type === ModalTypeEnum.EDIT_FOOD ? (
          <FoodForm type={data.type} />
        ) : (
          <P>{data.message}</P>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default FoodModal;
