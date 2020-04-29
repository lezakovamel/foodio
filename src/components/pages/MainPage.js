import React from "react";
import BaseTemplate from "../templates/BaseTemplate";
import FoodCard from "../molecules/FoodCard";

import styled from "@emotion/styled";
import { P } from "../atoms/TextFields";
import { Button } from "../atoms/Buttons";

const FoodioIntro = styled.div`
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

const FoodioTitle = styled.p`
  vertical-align: middle;
  margin: auto;
  text-align: center;
  color: ${(props) => props.theme.colors.primaryLight};
`;

const Box = styled.div`
  width: 63%;
  height: 33%;
  box-sizing: border-box;
  padding: ${(props) => props.theme.padding.medium};
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/images/${props => props.name}.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 5;
`;

const LogoTitle = styled.div`
  font-size: 72px;
`;

const SizedBox = styled.div`
  height: ${(props) => props.theme.padding.extended};
`;

const MainPage = () => {
  const onAccountClicked = () => {};

  return (
    <BaseTemplate title="MainPage" onAccountClicked={onAccountClicked}>
      <FoodioIntro>
        <TitleBox>
          <FoodioTitle>
            <LogoTitle>FOODIO</LogoTitle>
            <br />
            <P centered>Best žrádelník you will ever see.</P>
            <SizedBox />
            <Button>EXPLORE FOODS</Button>
          </FoodioTitle>
        </TitleBox>
        <ImageBox>
          <Box>
            <Img name="burger"/>
          </Box>
          <Box style={{ marginLeft: "auto" }}>
            <Img name="pasta"/>
          </Box>
          <Box>
            <Img name="pizza"/>
          </Box>
        </ImageBox>
      </FoodioIntro>
      <FoodCard></FoodCard>
    </BaseTemplate>
  );
};

export default MainPage;
