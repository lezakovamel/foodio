import React from "react";

import styled from "@emotion/styled/macro";
import "./FoodCard.scss";
import { H3, H4 } from "../atoms/Headlines";
import { P } from "../atoms/TextFields";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
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
  width: 30vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  margin: 15px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  position: relative;
  margin: ${(props) => props.theme.padding.medium};
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
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/images/pasta.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: -40px;
  background-position: center;
  box-sizing: border-box;
  padding: 5vh;
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
const FoodCard = ({ title, prepTime }) => {
  return (
    <Card data-testid="testCard">
      <Overlay>
        <H4 centered>Preparation time</H4>
        <P centered>{prepTime}m</P>
      </Overlay>
      <Placeholder />
      <Info>
        <H3>{title}</H3>
      </Info>
    </Card>
  );
};

export default FoodCard;
