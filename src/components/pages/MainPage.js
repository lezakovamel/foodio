import React, { useRef } from "react";
import BaseTemplate from "../templates/BaseTemplate";

import FoodioIntro from "../organisms/FoodioIntro";
import CardSection from "../organisms/CardSection";
import { PageTypeEnum } from "../../tools/Enums";

const MainPage = () => {
  const sectionRef = useRef();

  const onExploreFoodClicked = () => {
    if (sectionRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: sectionRef.current.offsetTop,
      });
    }
  };

  return (
    <BaseTemplate title="Foodio" pageType={PageTypeEnum.MAIN}>
      <FoodioIntro onExploreClick={onExploreFoodClicked} />
      <CardSection reference={sectionRef} />
    </BaseTemplate>
  );
};

export default MainPage;
