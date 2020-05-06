import React, { useState } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import FoodModal from "../templates/FoodModal/FoodModal";
import FoodDetail from "../templates/FoodDetail";
import { ModalTypeEnum, PageTypeEnum } from "../../tools/Enums";

const FoodDetailPage = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalType, setModalType] = useState(ModalTypeEnum.ADD_FOOD);

  const openEdit = (type) => {
    setModalType(type);
    setModalVisibility(true);
  };
  const closeEdit = (type) => setModalVisibility(false);

  return (
    <BaseTemplate title="_food_name_" pageType={PageTypeEnum.DETAIL}>
      <FoodModal
        visibility={modalVisibility}
        type={modalType}
        closeEdit={closeEdit}
      />
      <FoodDetail openEdit={openEdit} />
    </BaseTemplate>
  );
};

export default FoodDetailPage;
