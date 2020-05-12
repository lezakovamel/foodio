import React from "react";

import styled from "@emotion/styled";
import { H1, MobH1 } from "../atoms/Headlines";
import { P } from "../atoms/TextFields";
import FoodActions from "../molecules/FoodActions";
import IngredientsList from "../molecules/IngredientsList";
import Ingredient from "../molecules/Ingredient";
import Container from "../atoms/Container";

const FoodWrapper = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-image: url(${process.env.PUBLIC_URL}/images/pattern.jpg);
`;

const FoodOverlay = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${(props) => props.theme.padding.medium};
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(7px);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  background-color: rgba(255, 255, 255, 0.6);
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const BaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-sizing: border-box;
`;

const ImgWrapper = styled.div`
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 500px;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const Ingredients = styled.div`
  display: flex;
  width: fill-available;
  flex-direction: column;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.padding.medium};
  box-sizing: border-box;
`;

const Steps = styled.div`
  height: fit-content;
  margin: auto;

  background-color: rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.padding.medium};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.padding.extended};
  }
`;

const FoodDetail = ({
  onEditClicked,
  onFavouriteClicked,
  onDeleteClicked,
  title,
  keyId,
  slug,
  preparationTime,
  lastModifiedDate,
  directions,
  ingredients,
}) => {
  //const steps = directions.replace(/.(?=\d. )/g,"SICKDOPE");

  const linedDirections = () => {
    return directions !== undefined
      ? directions.replace(/\s(?=\d. )/g, "\n")
      : "";
  };

  const renderIngredients = () =>
    ingredients &&
    ingredients.map((ingredient) => (
      <Ingredient ingredient={ingredient.name} key={ingredient._id} />
    ));
  return (
    <Container>
      <FoodWrapper>
        <FoodOverlay>
          <MobH1>{title}</MobH1>
          <BaseInfo>
            <FoodActions
              openEdit={onEditClicked}
              onFavouriteClicked={onFavouriteClicked}
              preparationTime={preparationTime}
              onDeleteClicked={onDeleteClicked}
            />
            <Wrapper>
              <ImgWrapper>
                <Img
                  src="https://media.mnn.com/assets/images/2019/11/a_pile_of_junk_food_burgers_pizza.jpg"
                  alt={title}
                />
              </ImgWrapper>

              <Ingredients>
                <H1>Ingredients</H1>
                <IngredientsList>{renderIngredients()}</IngredientsList>
              </Ingredients>
            </Wrapper>
          </BaseInfo>
          <Steps>
            <P>Steps</P>
            <P>{linedDirections(directions)}</P>
          </Steps>
        </FoodOverlay>
      </FoodWrapper>
    </Container>
  );
};

export default FoodDetail;
