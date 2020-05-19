import React, { useState } from "react";
import FoodForm from "../organisms/FoodForm";
import { ModalTypeEnum } from "../../tools/Enums";
import FoodModal from "./FoodModal/FoodModal";

const FormTemplate = ({ type, onAddNew, onEditSave, data }) => {
  return (
    <>
      <FoodForm
        type={type}
        data={data}
        onAddNew={onAddNew}
        onEditSave={onEditSave}
      />
    </>
  );
};

export default FormTemplate;
