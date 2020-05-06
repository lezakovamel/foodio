import React, { useState, useContext } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import FoodModal from "../templates/FoodModal/FoodModal";
import FoodDetail from "../templates/FoodDetail";
import { ModalTypeEnum, PageTypeEnum } from "../../tools/Enums";
import { UserContext } from "../../Control";

const FoodDetailPage = () => {
  const { user } = useContext(UserContext);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalType, setModalType] = useState(ModalTypeEnum.ADD_FOOD);

  const openModal = (type) => {
    setModalType(type);
    setModalVisibility(true);
  };
  const closeEdit = (type) => setModalVisibility(false);

  const onFavouriteClicked = () => {
    user.name !== ""
      ? addFoodToFavourite()
      : openModal(ModalTypeEnum.NOT_LOGGED);
  };

  const addFoodToFavourite = () => {};
  return (
    <BaseTemplate title="_food_name_" pageType={PageTypeEnum.DETAIL}>
      <FoodModal
        visibility={modalVisibility}
        type={modalType}
        closeEdit={closeEdit}
      />
      <FoodDetail
        openModal={openModal}
        onFavouriteClicked={onFavouriteClicked}
      />
    </BaseTemplate>
  );
};

export default FoodDetailPage;
