import React from "react";

import styled from "@emotion/styled";
import BaseTemplate from "../templates/BaseTemplate";
import Container from "../atoms/Container";

const breakpoints = (props) => props.theme.breakpoints;

const Wrapper = styled.div`
  width: 80%;
  box-sizing: border-box;
  height: fit-content;
  margin: auto;
  border-radius: 10px;
  display: flex;
  background-color: red;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 80%;
  }
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;
const Img = styled.div`
  height: 300px;
  background-color: blue;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 30%;
  }
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PrepActions = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const Prep = styled.div`
  background-color: yellow;
  width: 100%;
`;

const Actions = styled.div`
  background-color: pink;
  width: 100%;
`;

const Ingreditens = styled.div``;

const FoodDetail = ({ id, title, prepTime, slug, lastModifiedDate }) => (
  <BaseTemplate title={title}>
    <Container>
      <Wrapper>
        <Row>
          <Img>_img_</Img>
          <Column>
            <PrepActions>
              <Prep>{prepTime}</Prep>
              <Actions>_food_actions_</Actions>
            </PrepActions>
            <Ingreditens>_ingreditens_</Ingreditens>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  </BaseTemplate>
);

export default FoodDetail;
