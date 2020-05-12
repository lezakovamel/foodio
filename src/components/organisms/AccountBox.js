import React from "react";

import styled from "@emotion/styled";

import { Icon } from "../atoms/Icon";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AccountBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: auto 3vw auto 0;
`;

export const AccountBox = ({ onAccountClicked }) => {
  return (
    <AccountBoxWrapper>
      <Icon icon={faUser} onClick={onAccountClicked} />
    </AccountBoxWrapper>
  );
};
