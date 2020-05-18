import React, { useState } from "react";
import FoodForm from "../organisms/FoodForm";
import { ModalTypeEnum } from "../../tools/Enums";
import FoodModal from "./FoodModal/FoodModal";

const FormTemplate = ({ type, onAddNew, onEditSave, data }) => {
  const [modalData, setModalData] = useState({
    type: ModalTypeEnum.ADD_FOOD,
    visibility: false,
    message: "",
  });

  const openModal = (type, message, payload) => {
    setModalData({
      type: type,
      visibility: true,
      message: message,
      payload: payload,
    });
  };
  const onModalClose = (type) => setModalData({ visibility: false });

  const onOpenIngre = () => {
    openModal(ModalTypeEnum.INGREDIENTS, "Ingredients", {
      ingredients: data.ingredients,
      type: type,
    });
  };

  return (
    <>
      <FoodModal data={modalData} onClose={onModalClose} />
      <FoodForm
        type={data.type}
        data={data}
        onAddNew={onAddNew}
        onEditSave={onEditSave}
        onOpenIngre={onOpenIngre}
      />
    </>
  );
};

export default FormTemplate;
