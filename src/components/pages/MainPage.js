import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BaseTemplate from "../templates/BaseTemplate";
import axios from "axios";
import FoodioIntro from "../organisms/FoodioIntro";
import CardSection from "../organisms/CardSection";
import SearchBar from "../molecules/SearchBar";
import FoodCard from "../molecules/FoodCard";
import { PageTypeEnum } from "../../tools/Enums";

const MainPage = () => {
  const sectionRef = useRef();

  const [recipeData, setRecipeData] = useState({
    cards: [],
    isLoading: false,
    error: "",
  });
  const [recipesData, setRecipesData] = useState({
    cards: [],
    isLoading: false,
    error: "",
  });
  const [recipeName, setRecipeName] = useState("");

  const handleChange = (event) => setRecipeName(event.target.value);

  /*useEffect(() => {
    window.addEventListener("scroll", onScrollChanged);

    titleRef.current.style.visibility = "hidden";
    titleRef.current.style.opacity = "0";
  }, []);

  const onExploreFoodClicked = () => {
    if (sectionRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: sectionRef.current.offsetTop,
      });
    }
  };*/

  const onExploreFoodClicked = () => {
    if (sectionRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: sectionRef.current.offsetTop,
      });
    }
  };
  const onSearchSubmit = (query) => {
    //value is search query e.g. "Špagety"
    console.log(query);
  };
  const { push } = useHistory();
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      setRecipesData({ ...recipesData, isLoading: true });

      const result = await axios(`https://exercise.cngroup.dk/api/recipes`);
      console.log(result.data);
      const data = result.data;
      console.log(data);

      setRecipesData({ ...recipesData, data: data, isLoading: false });
      console.log(data[1].slug);
    } catch ({ message }) {
      setRecipesData({ ...recipesData, isLoading: false, error: message });
    }
    
  };

  const renderRecipes = () => {
    if (recipesData.isLoading) {
      return <p>imagine some spinning circle here...</p>;
    }
    if (recipesData.message) {
      return <p>{recipeData.message}</p>;
    }
    

    /*return data.map(
      ({ id, title, preparationTime, slug, lastModifiedDate }) => (
        <FoodCard
          key={id}
          title={title}
          preparationTime={preparationTime}
          slug={slug}
          lastModifiedDate={lastModifiedDate}
        />
      )
    );*/
    /*<FoodCard data={recipesData.data} />
        {console.log(recipesData.data)}*/
  };

  /*const handleSearch = async () => {
    try {
      setRecipeData({ ...recipeData, isLoading: true });

      const result = await axios(
        `https://exercise.cngroup.dk/api/recipes/${recipeName}`
      );
      console.log(result.data);
      const { cards } = result.data;
      setRecipeData({ ...recipesData, cards, isLoading: false });
    } catch ({ message }) {
      setRecipeData({ ...recipesData, isLoading: false, error: message });
    }
  };*/
  return (
    <BaseTemplate title="Foodio" /*titleRef={titleRef}*/>
      <SearchBar handleChange={handleChange} recipeName={recipeName} />
      {/*</BaseTemplate><BaseTemplate
      title="Foodio"
      pageType={PageTypeEnum.MAIN}
      onSearchSubmit={onSearchSubmit}
    >*/}
      <FoodioIntro onExploreClick={onExploreFoodClicked} />
      <CardSection reference={sectionRef} />
      {renderRecipes()}
      <CardSection
        reference={sectionRef}
        title="Choose žrádýlko"
        isProfile={false}
      />
    </BaseTemplate>
  );
};

export default MainPage;
