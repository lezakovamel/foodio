import React from "react";

import styled from "@emotion/styled";

const ListWrapper = styled.div`
  width: 100%;
  min-height: 10vh;
`;

const IngredientUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
  li {
    box-sizing: border-box;
    padding: ${(props) => props.theme.padding.primary};
    width: 100%;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      background-color: #f0f0f0;
      transition: 0.2s ease-in-out;
    }
  }
  li:nth-of-type(odd) {
    color: white;
    background: ${(props) => props.theme.colors.primaryLight};
    :hover {
      background-color: ${(props) => props.theme.colors.primary};
      transition: 0.2s ease-in-out;
    }
  }
`;

const IngredientsList = ({ children }) => (
  <ListWrapper>
    <IngredientUl>{children}</IngredientUl>
  </ListWrapper>
);

export default IngredientsList;
