import React from "react";
import BaseTemplate from "../templates/BaseTemplate";
import FoodCard from "../molecules/FoodCard";
const MainPage = () => {
  const onAccountClicked = () => {};

  return (
    <BaseTemplate title="MainPage" onAccountClicked={onAccountClicked}>
      <FoodCard></FoodCard>
    </BaseTemplate>
  );
};

export default MainPage;
