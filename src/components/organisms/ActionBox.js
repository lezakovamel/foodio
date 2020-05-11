import React from "react";

import styled from "@emotion/styled";

import { Icon } from "../atoms/Icon";
import { faSearch, faPlus, faHome } from "@fortawesome/free-solid-svg-icons";
import { PageTypeEnum } from "../../tools/Enums";
import { useHistory } from "react-router";

const ActionBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const ActionBox = ({ onSearchClicked, onAddFoodClicked, pageType }) => {
  const { push } = useHistory();
  return (
    <ActionBoxWrapper>
      {pageType === PageTypeEnum.MAIN ? (
        <Icon icon={faSearch} onClick={onSearchClicked} />
      ) : pageType === PageTypeEnum.PROFILE ? (
        <Icon icon={faHome} onClick={() => push("/")} />
      ) : (
        <div />
      )}
      <Icon icon={faPlus} onClick={onAddFoodClicked} />
    </ActionBoxWrapper>
  );
};
