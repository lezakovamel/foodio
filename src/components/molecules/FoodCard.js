import React from "react";

import styled from "@emotion/styled/macro";
import "./FoodCard.scss";
import { H3, H4 } from "../atoms/Headlines";
import { P } from "../atoms/TextFields";

const Overlay = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 99;
  position: absolute;
  border-radius: 10px;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
`;

const Card = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  position: relative;
  &:hover {
    & ${Overlay} {
      visibility: visible;
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;

const Placeholder = styled.div`
  margin: auto;
  width: 100%;
  height: 100px;
  background-image: url(${process.env.PUBLIC_URL}/images/placeholder.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -45px;
`;

const Info = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0.5;
  display: flex;
  justify-content: center;
`;

//TODO on hover create white ovrelay with opacity, at overlay show cooking time
const FoodCard = () => {
  return (
    <Card data-testid="testCard">
      <Overlay>
        <H4 centered>_prep_time_</H4>
        <P centered>_xx_min_</P>
      </Overlay>
      <Placeholder />
      <Info>
        <H3>_food_desc_</H3>
      </Info>
    </Card>
  );
};

export default FoodCard;
