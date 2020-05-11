import React from "react";

import Container from "../atoms/Container";
import { Grid } from "../atoms/Grid";
import FoodCard from "../molecules/FoodCard";

const SearchTemplate = ({ data }) => {
  const renderCards = () =>
    data &&
    data.map((food) => (
      <FoodCard
        key={food._id}
        id={food._id}
        title={food.title}
        prepTime={food.preparationTime}
        slug={food.slug}
        lastModifiedDate={food.lastModifiedDate}
        isProfile={false}
      />
    ));
  return (
    <Container>
      <Grid>{renderCards()}</Grid>
    </Container>
  );
};

export default SearchTemplate;
