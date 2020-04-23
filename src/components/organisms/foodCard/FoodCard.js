import React from "react";

import styled from "@emotion/styled";
import "./FoodCard.scss";
import { H4, H3 } from "../../atoms/Headlines";

const Card = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  margin: 15px;
  border: 4px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
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
    <Card>
      <Placeholder />
      <Info>
        <H3>Pomazánečka</H3>
      </Info>
    </Card>
  );
};

export default FoodCard;
