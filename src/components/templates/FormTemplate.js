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

  const onEditSubmit = async (data) => {
    //TODO poslat data pres put na API
    console.log(data);
    /*
    try {
      await axios.put("https://exercise.cngroup.dk/api/recipes", data);
      push("/");
    } catch (error) {
      console.log("error", error);
    }*/
  };

  return (
    <>
      <FoodModal
        data={modalData}
        onClose={onModalClose}
        onEditSave={onEditSubmit}
      />
      <FoodForm
        type={data.type}
        data={data}
        onAddNew={onAddNew}
        onEditSave={onEditSave}
      />
    </>
  );
};

export default FormTemplate;
