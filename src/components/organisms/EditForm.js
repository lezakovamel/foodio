import React, { useState } from "react";
import { Formik } from "formik";

import styled from "@emotion/styled";
import { Button } from "../atoms/Buttons";
import { Input } from "../atoms/FormFields";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const EditForm = () => {
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

            <Button>UPDATE FOOD</Button>
          </FormWrapper>
        </form>
      )}
    </Formik>
  );
};

export default EditForm;
