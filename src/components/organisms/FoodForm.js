import React, { useState } from "react";

import * as yup from "yup";
import styled from "@emotion/styled";
import { Formik } from "formik";

import { Button } from "../atoms/Buttons";
import { Form } from "../atoms/Form";

import { ModalTypeEnum } from "../../tools/Enums";
import { FormWrapper } from "../atoms/FormWrapper";
import { FormInput, FormMultiselect } from "../atoms/FormFields";
import { FormTextarea } from "../atoms/Textarea";
import IngredientsComponent from "../molecules/IngredientsComponent";

const InputsWrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-wrap: wrap;
  margin-left: auto;
  justify-content: space-between;
  margin-right: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  button {
    margin-left: auto;
    border-radius: 5px;
  }
`;

const validationSchema = yup.object({
  title: yup.string().required("Name of the food is required").max(25),
  preparationTime: yup.number().required("Please fill preparation time"),
  directions: yup.string().required("Directions are required"),
});

const FoodForm = ({ type, onAddNew, onEditSave, data }) => {
  const [ingredients, setIngredients] = useState(data.ingredients);

  return (
    <Formik
      initialValues={{
        title: data.title,
        preparationTime: data.preparationTime,
        directions: data.directions,
        ingredients: data.ingredients,
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        //Do edit funkce se ti posle cely balik dat
        //Do add funkce se poslou data, ale ingredience zvlast, mysli na to pred ajax callem
        type === ModalTypeEnum.ADD_FOOD
          ? onAddNew(data, ingredients)
          : onEditSave(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit, errors, handleBlur, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <FormWrapper>
            <InputsWrapper>
              <FormInput
                name="title"
                type="text"
                value={values.title}
                handleBlur={handleBlur}
                onChange={handleChange}
                error={errors.title}
              />
              <FormInput
                name="preparationTime"
                type="number"
                value={values.preparationTime}
                handleBlur={handleBlur}
                onChange={handleChange}
                error={errors.preparationTime}
              />
              <FormTextarea
                name="directions"
                type="text"
                value={values.directions}
                handleBlur={handleBlur}
                onChange={handleChange}
                error={errors.directions}
              />
              <IngredientsComponent
                type={type}
                ingredients={ingredients}
                setIngredients={setIngredients}
              />

              <ButtonWrapper>
                <Button type="submit">
                  {type === ModalTypeEnum.ADD_FOOD ? "ADD FOOD" : "UPDATE FOOD"}
                </Button>
              </ButtonWrapper>
            </InputsWrapper>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default FoodForm;
