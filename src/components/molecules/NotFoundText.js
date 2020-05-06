import React from "react";
import styled from "@emotion/styled";
import { LogoTitle } from "../atoms/TextFields";

const NotFoundWrapper = styled.div`
  display: flex;
  margin: auto;
  color: ${(props) => props.theme.colors.primaryLight};
  box-sizing: border-box;
  padding: 0px 10vw;
`;

const NotFoundText = () => {
  return (
    <NotFoundWrapper>
      <LogoTitle centered>
        Page is not found or you are forbiden to see its content
      </LogoTitle>
    </NotFoundWrapper>
  );
};
export default NotFoundText;
