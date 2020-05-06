import React from "react";
import styled from "@emotion/styled";
import { Icon } from "../atoms/Icon";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import { LogoTitle } from "../atoms/TextFields";

const NotFoundWrapper = styled.div`
  display: flex;
`;

const NotFoundText = () => {
  return (
    <NotFoundText>
      <Icon icon={faCross} />
      <LogoTitle>
        Page is not found or you are forbiden to se its content
      </LogoTitle>
    </NotFoundText>
  );
};
export default NotFoundText;
