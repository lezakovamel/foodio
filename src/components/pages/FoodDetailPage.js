import React, { useState } from "react";

import styled from "@emotion/styled";
import BaseTemplate from "../templates/BaseTemplate";
import { P } from "../atoms/TextFields";
import { H1 } from "../atoms/Headlines";
import IngredientsList from "../molecules/IngredientsList";
import FoodActions from "../molecules/FoodActions";
import FoodEdit from "../templates/FoodEdit";
import FoodDetail from "../templates/FoodDetail";

const FoodDetailPage = () => {
  const [modalVisibility, setModalVisibility] = useState("block");

  const openEdit = () => setModalVisibility("block");
  const closeEdit = () => setModalVisibility("none");

  return (
    <BaseTemplate title="_food_name_">
      <FoodEdit visibility={modalVisibility} close={closeEdit} />
      <FoodDetail />
    </BaseTemplate>
  );
};

export default FoodDetailPage;
