import React from "react";

import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10vh;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 95vw;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 95vw;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80vw;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 60vw;
  }
`;

const Container = ({ children }) => <ContainerDiv>{children}</ContainerDiv>;

export default Container;
