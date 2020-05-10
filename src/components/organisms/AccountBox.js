import React, { useContext } from "react";

import styled from "@emotion/styled";

import { Icon } from "../atoms/Icon";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AccountBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: auto 3vw auto 0;
`;

export const AccountBox = ({ onAccountClicked, loginRoute }) => {
  return (
    <AccountBoxWrapper>
      <Link to={loginRoute}>
        <Icon icon={faUser} onClick={onAccountClicked} />
      </Link>
    </AccountBoxWrapper>
  );
};
