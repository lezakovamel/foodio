import React, { useState } from "react";
import { Formik } from "formik";

import styled from "@emotion/styled";
import { Button } from "../atoms/Buttons";
import { Input } from "../atoms/FormFields";
import { ModalTypeEnum } from "../../tools/Enums";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FoodForm = ({ type, onAddNew, onEditSave }) => {
  const [title, setTitle] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [directions, setDirections] = useState("");
  const [ingredients, setIngredients] = useState("");

  return (
    <Formik
      initialValues={{
        title: title,
        preparationTime: preparationTime,
        directions: directions,
        ingredients: ingredients,
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Input name="title" />
            <Input name="preparationTime" />
            <Input name="directions" />
            <Input name="ingredients" />
            {/**
             * At FoodDetailPage create relevant functions [onAddNew], [onEditSave] and send them to his component
             * handling is done via [type], this will tell you if you r going to Save edited or Add new
             * [type] can also tell you wich properties fill onLoad, none if you r adding new food, all if you r going to edit food
             */}
            <Button
              onClick={type === ModalTypeEnum.ADD_FOOD ? onAddNew : onEditSave}
            >
              {type === ModalTypeEnum.ADD_FOOD ? "ADD FOOD" : "UPDATE FOOD"}
            </Button>
          </FormWrapper>
        </form>
      )}
    </Formik>
  );
};

export default FoodForm;
