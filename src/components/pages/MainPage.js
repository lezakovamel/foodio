import React, { useRef } from "react";
import BaseTemplate from "../templates/BaseTemplate";

import FoodioIntro from "../organisms/FoodioIntro";
import CardSection from "../organisms/CardSection";


const MainPage = () => {
  const sectionRef = useRef();

  const onExploreFoodClicked = () => {
    {
      if (sectionRef.current) {
        window.scrollTo({
          behavior: "smooth",
          top: sectionRef.current.offsetTop,
        });
      }
    }
  };

  const onAccountClicked = () => {};

  return (
    <BaseTemplate title="MainPage" onAccountClicked={onAccountClicked}>
      <FoodioIntro onExploreClick={onExploreFoodClicked} />
      <CardSection reference={sectionRef} />
    </BaseTemplate>
  );
};

export default MainPage;
