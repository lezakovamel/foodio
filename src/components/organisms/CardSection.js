import React from "react";

import styled from "@emotion/styled";
import FoodCard from "../molecules/FoodCard";
import { H5 } from "../atoms/Headlines";
import { Grid } from "../atoms/Grid";

const SectionWrapper = styled.div`
  padding-top: 10vh;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  margin: ${(props) => props.theme.padding.medium};
`;

const CardSection = ({ reference, title, data }) => {
  const renderCards = () =>
    data &&
    data.map((food) => (
      <FoodCard
        key={food._id}
        title={food.title}
        prepTime={food.preparationTime}
      />
    ));

  return (
    <SectionWrapper ref={reference}>
      <TitleWrapper>
        <H5>{title}</H5>
      </TitleWrapper>
      <Grid>{renderCards()}</Grid>
    </SectionWrapper>
  );
};

export default CardSection;
