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
  background-image: url(${process.env.PUBLIC_URL}/images/pattern.jpg);
`;
const IntroOverlay = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(7px);
`;

const TitleBox = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${process.env.PUBLIC_URL}/images/food-pattern.png);
  background-blend-mode: soft-light;
  outline: 2px solid ${(props) => props.theme.colors.white};
  outline-offset: -15px;
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
      <IntroOverlay>
        <TitleBox>
          <FoodioTitle onExploreClick={onExploreClick} />
        </TitleBox>
        {/*<ImageBox>
        <IntroImages />
      </ImageBox>*/}
      </IntroOverlay>
    </IntroWrapper>
  );
};

export default FoodioIntro;
