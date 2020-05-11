import React from "react";
import styled from "@emotion/styled";
import { H1 } from "../atoms/Headlines";
import { P } from "../atoms/TextFields";
import FoodActions from "../molecules/FoodActions";
import IngredientsList from "../molecules/IngredientsList";
import Ingredient from "../molecules/Ingredient";
import { Grid } from "../atoms/Grid";
import Container from "../atoms/Container";
const FoodWrapper = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-image: url(${process.env.PUBLIC_URL}/images/pattern.jpg);
`;

const FoodOverlay = styled.div`
  box-sizing: border-box;
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
  width: 500px;
  height: 100%;
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
  padding: ${(props) => props.theme.padding.extended};
`;

const FoodDetail = ({
  openModal,
  onFavouriteClicked,
  key,
  title,
  slug,
  preparationTime,
  lastModifiedDate,
  directions,
  ingredients,
}) => {
  const renderIngredients = () =>
    ingredients &&
    ingredients.map((ingredient) => (
      <Ingredient ingredient={ingredient.name} />
    ));
  return (
    <Container>
      <FoodWrapper>
        <FoodOverlay>
          <BaseInfo>
            <FoodActions
              openEdit={openModal}
              onFavouriteClicked={onFavouriteClicked}
              preparationTime={preparationTime}
            />
            {console.log(preparationTime)}
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
            <P>{directions}</P>
          </Steps>
        </FoodOverlay>
      </FoodWrapper>
    </Container>
  );
};

export default FoodDetail;
