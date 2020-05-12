import React, { useState } from "react";

import * as yup from "yup";

import { Formik } from "formik";

import { Button } from "../atoms/Buttons";
import { Input } from "../atoms/FormFields";
import { Textarea } from "../atoms/Textarea";
import { ModalTypeEnum } from "../../tools/Enums";
import { FormWrapper } from "../atoms/FormWrapper";

const validationSchema = yup.object({
  title: yup.string().required("Name of the food is required").max(15),
  preparationTime: yup.number().required("Please fill preparation time"),
  directions: yup.string().required("Directions are required"),
});

const FoodForm = ({
  type,
  onAddNew,
  onEditSave,
  data,
  //ingredients
}) => {

  const [title, setTitle] = useState(data.title);
  const [preparationTime, setPreparationTime] = useState(data.preparationTime);
  const [directions, setDirections] = useState(data.directions);
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
        setSubmitting(true);
        console.log(`tu data: ${data}`);
        type === ModalTypeEnum.ADD_FOOD
          ? onAddNew(data)
          : onEditSave(title, preparationTime, directions, ingredients);
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
            {console.log(`tu prep time: ${preparationTime}`)}
            <Textarea
              name="directions"
              type="text"
              value={directions}
              setValue={setDirections}
            />
            {/*<Input
              name="ingredients"
              type="text"
              value={ingredients}
              setValue={setIngredients}
              //options ={ingredients}
            />*/}

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
