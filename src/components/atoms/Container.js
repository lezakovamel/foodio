import React from "react";
import styled from "@emotion/styled";

const breakpoints = (props) => props.theme.breakpoints;

const ContainerDiv = styled.div`
  margin: auto;
  width: 60vw;
  display: flex;
  margin-top: 10vh;
  min-height: 80vh;
  @media screen and (max-width: ${breakpoints.sm}) {
    width: 95vw;
  }
  @media screen and (min-width: ${breakpoints.sm}) {
    width: 95vw;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    width: 80vw;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    width: 60vw;
  }
`;

const Container = ({ children }) => <ContainerDiv>{children}</ContainerDiv>;

export default Container;
