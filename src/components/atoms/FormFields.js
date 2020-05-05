import React from "react";
import styled from "@emotion/styled";
import { Label } from "./TextFields";

const InputWrapper = styled.div`
  width: 40%;
  height: 5vh;
  box-sizing: border-box;
  margin: ${(props) => props.theme.padding.primary};
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;
export const Input = ({ name, type, value, setValue }) => {
  //TODO function for capitalizing first letter
  return (
    <InputWrapper>
      <Label>{name}</Label>
      <InputField
        name={name}
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></InputField>
    </InputWrapper>
  );
};
