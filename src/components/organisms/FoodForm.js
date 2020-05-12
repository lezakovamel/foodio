import React, { useState } from "react";

import * as yup from "yup";
import styled from "@emotion/styled";
import { Formik } from "formik";

import { Input } from "../atoms/FormFields";
import { Textarea } from "../atoms/Textarea";
import { ModalTypeEnum } from "../../tools/Enums";
import { FormWrapper } from "../atoms/FormWrapper";
import { Button } from "antd";
import MultiSelect from "react-multi-select-component";
import { useGetIngredients } from "../../hooks/HookGetIngredients";
import Loading from "../atoms/Loading/Loading";

const InputsWrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-wrap: wrap;
`;

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
}) => {
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
        <form onSubmit={handleSubmit} name="form">
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

            <Button htmlType="submit"  >
              {type === ModalTypeEnum.ADD_FOOD ? "ADD FOOD" : "UPDATE FOOD"}
            </Button>
          </FormWrapper>
        </form>
      )}
    </Formik>
  );
};

export default FoodForm;
