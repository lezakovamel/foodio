import React, { useState } from "react";

import styled from "@emotion/styled";
import BaseTemplate from "../templates/BaseTemplate";
import { P } from "../atoms/TextFields";
import { H1 } from "../atoms/Headlines";
import IngredientsList from "../molecules/IngredientsList";
import FoodActions from "../molecules/FoodActions";
import FoodEdit from "../organisms/FoodEdit";

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BaseInfo = styled.div`
  width: 80vw;
  min-height: 50vh;
  margin: auto;
  position: relative;
  box-sizing: border-box;
`;

const Img = styled.img`
  min-width: 40vw;
  min-height: 40vh;
  box-sizing: border-box;
`;

const Ingredients = styled.div`
  width: 60vw;
  min-height: 30vh;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px ${(props) => props.theme.padding.primary};
  box-sizing: border-box;
  border-left: 2px solid ${(props) => props.theme.colors.primary};
  border-top: 2px solid ${(props) => props.theme.colors.primary};
`;

const Steps = styled.div`
  width: 80vw;
  min-height: 20vh;
  margin: auto;
  box-sizing: border-box;
`;

const FoodDetail = () => {
  const [modalVisibility, setModalVisibility] = useState("none");
  
  const openEdit = () => setModalVisibility("block");
  const closeEdit = () => setModalVisibility("none");

  return (
    <BaseTemplate title="_food_name_">
      <FoodEdit visibility={modalVisibility} close={closeEdit}/>
      <Wrapper>
        <BaseInfo>
          <Img src="_img_src_from_search_api_" alt="_food_title_"></Img>
          <FoodActions />
          <Ingredients>
            <H1 onClick={() => openEdit()}>Ingredients</H1>
            <IngredientsList>
              {
                // TODO ingredients tile, p for debug
              }
              <P>_ing1_</P>
              <P>_ing2_</P>
              <P>_ing3_</P>
              <P>_ing4_</P>
              <P>_ing5_</P>
            </IngredientsList>
          </Ingredients>
        </BaseInfo>
        <Steps>
          {
            //TODO step tiles & list, just for debug
          }
          <P>_step1_</P>
          <P>_step1_</P>
          <P>_step1_</P>
          <P>_step1_</P>
        </Steps>
      </Wrapper>
    </BaseTemplate>
  );
};

export default FoodDetail;
