import React from "react";

import styled from "@emotion/styled";

import { Icon } from "../atoms/Icon";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

const ActionBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: auto 3vw auto 0;
`;

export const ActionBox = ({ onDispalySearchClicked, onAddFoodClicked }) => {
  return (
    <ActionBoxWrapper>
      <Icon icon={faSearch} onClick={onDispalySearchClicked} />
      <Icon icon={faPlus} onClick={onAddFoodClicked} />
    </ActionBoxWrapper>
  );
};
