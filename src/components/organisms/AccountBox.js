import React, { useContext } from "react";

import styled from "@emotion/styled";

import { Icon } from "../atoms/Icon";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Control";
import { H5 } from "../atoms/Headlines";
import { Link } from "react-router-dom";

const AccountBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-right: 3vw;
`;

export const AccountBox = ({ onAccountClicked, loginRoute }) => {
  const { user } = useContext(UserContext);
  return (
    <AccountBoxWrapper>
      <H5>{user.name}</H5>
      <Link to={loginRoute}>
        <Icon icon={faUser} onClick={onAccountClicked} />
      </Link>
    </AccountBoxWrapper>
  );
};
