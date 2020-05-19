import React from "react";
import styled from "@emotion/styled";
import { Label, ErrorText } from "./TextFields";

const TextareaWrapper = styled.div`
  width: 40%;
  height: fit-content;
  box-sizing: border-box;
  margin: ${(props) => props.theme.padding.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 90%;
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  resize:none;
  overflow-y: scroll;
  &:focus {
    /*outline: 2px solid ${(props) => props.theme.colors.primary};*/
    outline: none;
  }
  &::selection {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
export const Textarea = ({ name, type, value, setValue, onChange }) => {
  //TODO function for capitalizing first letter
  return (
    <TextareaWrapper>
      <Label>{name}</Label>
      <TextareaField
        name={name}
        type={type}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (onChange !== undefined) {
            onChange(event.target.value);
          }
        }}
      ></TextareaField>
    </TextareaWrapper>
  );
};
export const FormTextarea = ({
  name,
  type,
  value,
  onChange,
  handleBlur,
  error,
}) => {
  return (
    <TextareaWrapper>
      <Label>{name}</Label>
      <TextareaField
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        error={error}
      />
      <ErrorText>{error}</ErrorText>
    </TextareaWrapper>
  );
};
