import React, { useState } from "react";
import styled from "@emotion/styled";
import { Label, ErrorText } from "./TextFields";
import MultiSelect from "react-multi-select-component";
import { useGetIngredients } from "../../hooks/useGetIngredients";

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

export const FormMultiselect = ({ name, foodIngredients }) => {
  const ingre = useGetIngredients().options.map((ing) => {
    return { label: ing, value: ing };
  });

  const [selected, setSelected] = useState(
    foodIngredients.map((ing) => {
      return { label: ing.name, value: ing.name };
    })
  );
  return (
    <InputWrapper>
      <Label>{name}</Label>
      <MultiSelect
        options={ingre}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </InputWrapper>
  );
};
