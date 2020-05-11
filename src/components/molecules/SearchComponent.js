import React, { useState } from "react";
import { Grid } from "../atoms/Grid";
import FoodCard from "./FoodCard";
import SearchBar from "./SearchBar";

const SearchComponent = ({ data }) => {
  const [foods, setFoods] = useState(data);

  const onSearchChange = (query) => {
    if (query !== "") {
      setFoods(
        data.filter((food) => food.slug.toLowerCase().includes(query))
      );
    } else {
      setFoods(data);
    }
  };

  const renderCards = () =>
    foods &&
    foods.map((food) => (
      <FoodCard
        key={food._id}
        id={food._id}
        title={food.title}
        prepTime={food.preparationTime}
        slug={food.slug}
        lastModifiedDate={food.lastModifiedDate}
        isProfile={false}
        onIconClick={() => {}}
      />
    ));
  return (
    <div>
      <SearchBar onSearchChange={onSearchChange} />
      <Grid>{renderCards()}</Grid>
    </div>
  );
};

export default SearchComponent;
