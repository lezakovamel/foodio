import React from "react";

import styled from "@emotion/styled";
import FoodCard from "../molecules/FoodCard";

const SectionWrapper = styled.div`
  min-height: 80vh;
`;

const CardSection = ({reference}) => {
  return (
    <SectionWrapper ref={reference}>
      <FoodCard></FoodCard>
    </SectionWrapper>
  );
};

export default CardSection;
