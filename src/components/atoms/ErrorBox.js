import React from 'react';

import styled from "@emotion/styled";

const ErrorWrapper = styled.div`
  color: red;
  margin: 2vh 0vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const ErrorBox = ({ error }) => {
  return <ErrorWrapper>{error}</ErrorWrapper>;
};
