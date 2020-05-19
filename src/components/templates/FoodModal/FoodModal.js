import React from "react";

import { Modal } from "react-bootstrap";
import styled from "@emotion/styled";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./FoodModal.scss";

import { H1 } from "../../atoms/Headlines";
import { Icon } from "../../atoms/Icon";
import { ModalTypeEnum } from "../../../tools/Enums";
import { P } from "../../atoms/TextFields";
import SearchComponent from "../../molecules/SearchComponent";
import FormTemplate from "../FormTemplate";
import IngredientsComponent from "../../molecules/IngredientsComponent";

const IconWrapper = styled.div`
  margin-left: auto;
`;
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
          <FormTemplate type={data.type} data={data.payload} onAddNew={onAddNew} />
        );
      case ModalTypeEnum.EDIT_FOOD:
        return (
          <FormTemplate
            type={data.type}
            data={data.payload}
            onEditSave={onEditSave}
          />
        );
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
        <IconWrapper>
          <Icon icon={faTimes} onClick={onClose} />
        </IconWrapper>
      </Modal.Header>

      <Modal.Body className="modalBody">{body()}</Modal.Body>

    </Modal>
  );
};

export default FoodModal;