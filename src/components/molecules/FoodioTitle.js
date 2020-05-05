import React from "react";

import styled from '@emotion/styled'

import { LogoTitle, P } from "../atoms/TextFields";
import { SizedBox } from "../atoms/SizedBox";
import { Button } from "../atoms/Buttons";

const TitleWrapper = styled.p`
  vertical-align: middle;
  margin: auto;
  text-align: center;
  color: ${(props) => props.theme.colors.primaryLight};
`;

const FoodioTitle = ({ onExploreClick }) => {
  return (
    <TitleWrapper>
      <LogoTitle>FOODIO</LogoTitle>
      <br />
      <P centered>Best žrádelník you will ever see.</P>
      <SizedBox />
      <Button onClick={onExploreClick}>EXPLORE FOODS</Button>
    </TitleWrapper>
  );
};

export default FoodioTitle;
