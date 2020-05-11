import React from "react";

import styled from "@emotion/styled";

import { Icon } from "../atoms/Icon";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

const ActionBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const ActionBox = ({ onSearchClicked, onAddFoodClicked, hasSearch }) => {
  return (
    <ActionBoxWrapper>
      {hasSearch ? <Icon icon={faSearch} onClick={onSearchClicked} /> : <div />}
      <Icon icon={faPlus} onClick={onAddFoodClicked} />
    </ActionBoxWrapper>
  );
};
