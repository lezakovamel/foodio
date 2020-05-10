import React, { useState } from "react";

import * as yup from "yup";

import { Formik } from "formik";

import { Button } from "../atoms/Buttons";
import { Input } from "../atoms/FormFields";
import { ModalTypeEnum } from "../../tools/Enums";
import { FormWrapper } from "../atoms/FormWrapper";
import styled from "@emotion/styled";

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
`;

const validationSchema = yup.object({
  title: yup.string().required("Name of the food is required").max(15),
  preparationTime: yup.number().required("Please fill preparation time"),
});

const FoodForm = ({
  type,
  onAddNew,
  onEditSave,
  //ingredients
}) => {
  const [title, setTitle] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [directions, setDirections] = useState("");
  const [ingredients, setIngredients] = useState([]);

  return (
    <Formik
      initialValues={{
        title: title,
        preparationTime: preparationTime,
        directions: directions,
        ingredients: ingredients,
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        console.log("btn bitch");

        setSubmitting(true);
        console.log(data);
        type === ModalTypeEnum.ADD_FOOD ? onAddNew(data) : onEditSave(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <Input name="title" type="text" value={title} setValue={setTitle} />
            <Input
              name="preparationTime"
              type="text"
              value={preparationTime}
              setValue={setPreparationTime}
            />
            <Input
              name="directions"
              type="text"
              value={directions}
              setValue={setDirections}
            />
            <Input
              name="ingredients"
              type="text"
              value={ingredients}
              setValue={setIngredients}
              //options ={ingredients}
            />
            <OptionWrapper>
              <input type="checkbox" name="cb" id="cb1" />
              <label for="cb1">Check this</label>
              <input type="checkbox" name="cb" id="cb2" />
              <label for="cb2">... and this...</label>
              <input type="checkbox" name="cb" id="cb3" />
              <label for="cb3">and maybe this</label>
            </OptionWrapper>
            {/**
             * At FoodDetailPage create relevant functions [onAddNew], [onEditSave] and send them to his component
             * handling is done via [type], this will tell you if you r going to Save edited or Add new
             * [type] can also tell you wich properties fill onLoad, none if you r adding new food, all if you r going to edit food
             */}
            <Button type="submit" onClick={handleSubmit}>
              {type === ModalTypeEnum.ADD_FOOD ? "ADD FOOD" : "UPDATE FOOD"}
            </Button>
          </FormWrapper>
        </form>
      )}
    </Formik>
  );
};

export default FoodForm;
