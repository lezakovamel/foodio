import React, { useState } from "react";

import * as yup from "yup";
import styled from "@emotion/styled";
import { Formik } from "formik";

import { Button } from "../atoms/Buttons";
import { Form } from "../atoms/Form";

import { Input } from "../atoms/FormFields";
import { Textarea } from "../atoms/Textarea";
import { ModalTypeEnum } from "../../tools/Enums";
import { FormWrapper } from "../atoms/FormWrapper";
import MultiSelect from "react-multi-select-component";
import { useGetIngredients } from "../../hooks/useGetIngredients";
import Loading from "../atoms/Loading/Loading";

const InputsWrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-right: ${(props) => props.theme.padding.primary};
  button {
    margin-left: auto;
  }
`;

const validationSchema = yup.object({
  title: yup.string().required("Name of the food is required").max(15),
  preparationTime: yup.number().required("Please fill preparation time"),
  directions: yup.string().required("Directions are required"),
});

const FoodForm = ({ type, onAddNew, onEditSave, data }) => {
  const ingre = useGetIngredients();

  const [title, setTitle] = useState(data.title);
  const [preparationTime, setPreparationTime] = useState(data.preparationTime);
  const [directions, setDirections] = useState(data.directions);

  const [selected, setSelected] = useState([]);

  const resolveIngredients = () => {
    return type === ModalTypeEnum.ADD_FOOD
      ? ingre.options.map((ing) => {
          return { label: ing, value: ing };
        })
      : data.ingredients.map((ing) => {
          return { label: ing.name, value: ing.name };
        });
  };
  return (
    <Formik
      initialValues={{
        title: title,
        preparationTime: preparationTime,
        directions: directions,
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        type === ModalTypeEnum.ADD_FOOD ? onAddNew(data) : onEditSave(data);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormWrapper>
            <InputsWrapper>
              <Input
                name="title"
                type="text"
                value={title}
                setValue={setTitle}
              />
              <Input
                name="preparationTime"
                type="text"
                value={preparationTime}
                setValue={setPreparationTime}
              />
              <Textarea
                name="directions"
                type="text"
                value={directions}
                setValue={setDirections}
              />
              {ingre.isLoading ? (
                <Loading />
              ) : (
                <MultiSelect
                  options={resolveIngredients()}
                  value={selected}
                  onChange={setSelected}
                  labelledBy={"Select"}
                />
              )}
              <ButtonWrapper>
                <Button type="submit" onClick={handleSubmit}>
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
