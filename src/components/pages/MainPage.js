import React, { useRef } from "react";

import BaseTemplate from "../templates/BaseTemplate";
import FoodioIntro from "../organisms/FoodioIntro";
import CardSection from "../organisms/CardSection";
import Loading from "../atoms/Loading/Loading";
import { useGetData } from "../../hooks/useGetRecipes";
import { PageTypeEnum } from "../../tools/Enums";

const MainPage = () => {
  const sectionRef = useRef();

  const recipeData = useGetData();

  const onExploreFoodClicked = () => {
    if (sectionRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: sectionRef.current.offsetTop,
      });
    }
  };
  return (
    <BaseTemplate title="Foodio" pageType={PageTypeEnum.MAIN} data={recipeData.cards}>
      <FoodioIntro onExploreClick={onExploreFoodClicked} />
      {!recipeData.isLoading ? (
        <CardSection
          title="Choose žrádýlko"
          data={recipeData.cards}
          isProfile={false}
          reference={sectionRef}
        />
      ) : (
        <Loading />
      )}
    </BaseTemplate>
  );
};

export default MainPage;
