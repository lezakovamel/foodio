import React, { useRef } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import FoodioIntro from "../organisms/FoodioIntro";
import CardSection from "../organisms/CardSection";
import Loading from "../atoms/Loading/Loading";

import {useGetData} from '../../hooks/HookGetRecipes'

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
  const onSearchChanged = (query) => {
 
  };
  return (
    <BaseTemplate
      title="Foodio"
      /*titleRef={titleRef}*/
    >
      <FoodioIntro onExploreClick={onExploreFoodClicked} />
      {!recipeData.isLoading ? (
        <CardSection
          title="Choose žrádýlko"
          data={recipeData.cards}
          isProfile={false}
        />
      ) : (
        <Loading />
      )}
    </BaseTemplate>
  );
};

export default MainPage;
