import React from "react";

import styled from "@emotion/styled";

import { LogoTitle, P } from "../atoms/TextFields";
import { TitleButton } from "../atoms/Buttons";

const TitleWrapper = styled.p`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  margin: auto;
  text-align: center;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.white};
`;
const Hr = styled.hr`
  width: 50px;
  padding: 10px;
  border-top: 2px solid white;
  border-radius: 2px;
`;

const FoodioTitle = ({ onExploreClick }) => {
  return (
    <TitleWrapper>
      <LogoTitle>FOODIO</LogoTitle>
      <Hr />
      <P>Best žrádelník you will ever see.</P>
      <Hr />
      <TitleButton onClick={onExploreClick}>EXPLORE FOODS</TitleButton>
    </TitleWrapper>
  );
};

export default FoodioTitle;
