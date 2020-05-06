import React from "react";

import styled from "@emotion/styled";
import FoodCard from "../molecules/FoodCard";
import { H5 } from "../atoms/Headlines";
import { Grid } from "../atoms/Grid";
import { TitleWrapper } from "../atoms/TitleWrapper";

const SectionWrapper = styled.div`
  padding-top: 10vh;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`;

const CardSection = ({ reference, title, data, isProfile, onIconClick }) => {
  const renderCards = () =>
    data &&
    data.map((food) => (
      <FoodCard
        key={food._id}
        id={food._id}
        title={food.title}
        prepTime={food.preparationTime}
        isProfile={isProfile}
        onIconClick={onIconClick}
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
