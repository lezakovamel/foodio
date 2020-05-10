import React from "react";

import styled from "@emotion/styled/macro";
import "./FoodCard.scss";
import { H3, H4 } from "../atoms/Headlines";
import { useHistory } from "react-router-dom";
import { P } from "../atoms/TextFields";
import { Icon } from "../atoms/Icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
  /*border-radius: 10px;*/
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.primary};
  /*border-radius: 10px;*/
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    & ${Overlay} {
      visibility: visible;
      opacity: 0.9;
      cursor: pointer;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: ${(props) => props.theme.padding.primary};
    width: 48%;
    height: 175px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: ${(props) => props.theme.padding.medium};
    width: 250px;
    height: 250px;
  }
`;

const Placeholder = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/images/pasta.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -40px;
  background-position: center;
  box-sizing: border-box;
  padding: 5vh;
`;

const Info = styled.div`
  width: 100%;
  height: 90px;
  color:white !important;
  /*background-color: ${(props) => props.theme.colors.white};
  opacity: 0.5;*/
  display: flex;
  justify-content: center;
  margin:auto;

  h3{
    color:white !important;
    margin-bottom:none !important;
    margin:auto !important;
  }
`;

//TODO on hover create white ovrelay with opacity, at overlay show cooking time
const FoodCard = ({
  id,
  title,
  preparationTime,
  slug,
  lastModifiedDate /*, prepTime, isProfile, onIconClick */,
}) => {
  const { push } = useHistory();
  const handleGoToRecipeDetail = (recipeId) => push(`/recipe/${recipeId}`);
  return (
    <Card data-testid="testCard" onClick={() => handleGoToRecipeDetail(1)}>
      <Overlay>
        {/*{!isProfile ? (
          <div />
        ) : (
          <Icon icon={faTimes} onClick={() => onIconClick(id)} />
        )}*/}
        <H4 centered>Preparation time</H4>
        <P centered>{/*{prepTime}*/} minutes</P>
      </Overlay>
      <Placeholder />
      <Info>
        <H3>Tu title:{title}</H3>
      </Info>
    </Card>
  );
};

export default FoodCard;
