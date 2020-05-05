import React from "react";

import styled from "@emotion/styled";
import FoodioTitle from "../molecules/FoodioTitle";
import IntroImages from "../molecules/IntroImages";

const IntroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 20vh;
  padding-top: 15vh;
`;

const TitleBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ImageBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FoodioIntro = ({ onExploreClick }) => {
  return (
    <IntroWrapper>
      <TitleBox>
        <FoodioTitle onExploreClick={onExploreClick} />
      </TitleBox>
      <ImageBox>
        <IntroImages />
      </ImageBox>
    </IntroWrapper>
  );
};

export default FoodioIntro;
