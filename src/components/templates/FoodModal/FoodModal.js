import React from "react";

import { Modal } from "react-bootstrap";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FoodModal.scss";

import FoodForm from "../../organisms/FoodForm";
import { H1 } from "../../atoms/Headlines";
import { Icon } from "../../atoms/Icon";
import { ModalTypeEnum } from "../../../tools/Enums";
import { P } from "../../atoms/TextFields";
import SearchComponent from "../../molecules/SearchComponent";

const FoodModal = ({ data, onClose, onAddNew, onEditSave }) => {
  const title = () => {
    switch (data.type) {
      case ModalTypeEnum.ADD_FOOD:
        return "Add food";
      case ModalTypeEnum.EDIT_FOOD:
        return data.payload.title;
      case ModalTypeEnum.NOT_LOGGED:
        return "Error";
      case ModalTypeEnum.FAV_ADDED:
        return "Yuch";
      case ModalTypeEnum.SEARCH:
        return "Search foods";
      default:
        break;
    }
  };

  const body = () => {
    switch (data.type) {
      case ModalTypeEnum.ADD_FOOD:
        return (
          <FoodForm type={data.type} data={data.payload} onAddNew={onAddNew} />
        );
      case ModalTypeEnum.EDIT_FOOD:
        return <FoodForm type={data.type} data={data.payload} onEditSave={onEditSave} />;
      case ModalTypeEnum.NOT_LOGGED:
        return <P>{data.message}</P>;
      case ModalTypeEnum.FAV_ADDED:
        return <P>{data.message}</P>;
      case ModalTypeEnum.SEARCH:
        return <SearchComponent data={data.payload} />;
      default:
        break;
    }
  };

  return (
    <Modal
      show={data.visibility}
      onHide={onClose}
      dialogClassName="modalWindow"
    >
      <Modal.Header>
        <H1>{title()}</H1>
        <Icon icon={faTimes} onClick={onClose} />
      </Modal.Header>
      <Modal.Body>{body()}</Modal.Body>
    </Modal>
  );
};

export default FoodModal;
