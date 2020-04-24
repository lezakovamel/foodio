import React from "react";

import styled from "@emotion/styled";

const ListWrapper = styled.div`
  width: 40vw;
  min-height: 10vh;
  margin-left: ${(props) => props.theme.padding.extended};
`;

const IngredientsList = ({ children }) => <ListWrapper>{children}</ListWrapper>;


export default IngredientsList;