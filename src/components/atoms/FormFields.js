import React, { useState } from "react";

import styled from "@emotion/styled";
import MultiSelect from "react-multi-select-component";

import { Label, ErrorText } from "./TextFields";

const InputWrapper = styled.div`
  width: 40%;
  height: fit-content;
  box-sizing: border-box;
  margin: ${(props) => props.theme.padding.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 90%;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &::selection {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;

const SelectField = styled.select`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
  &::selection {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
export const Input = ({ name, type, value, setValue, onChange }) => {
  //TODO function for capitalizing first letter
  return (
    <InputWrapper>
      <Label>{name}</Label>
      <InputField
        name={name}
        type={type}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (onChange !== undefined) {
            onChange(event.target.value);
          }
        }}
      />
    </InputWrapper>
  );
};
export const FormInput = ({
  name,
  type,
  value,
  handleBlur,
  onChange,
  error,
}) => {
  return (
    <InputWrapper>
      <Label>{name}</Label>
      <InputField
        name={name}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
      />
      <ErrorText>{error}</ErrorText>
    </InputWrapper>
  );
};

export const FormMultiselect = ({
  name,
  ingredients,
  selected,
  setSelected,
}) => {
  return (
    <InputWrapper>
      <Label>{name}</Label>
      <MultiSelect
        options={ingredients}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </InputWrapper>
  );
};

export const Select = ({ name, options, ingredients, setIngredients }) => {
  const [selected, setSelected] = useState("");
  return (
    <InputWrapper>
      <Label>{name}</Label>
      <SelectField
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
          setIngredients([
            ...ingredients,
            {
              _id: `${Math.floor(Math.random() * 150000)}`,
              name: e.target.value,
              amount: 0,
              amountUnit: "g",
              isGroup: false,
            },
          ]);
        }}
      >
        {options()}
      </SelectField>
    </InputWrapper>
  );
};
