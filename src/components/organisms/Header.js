import React from "react";

import styled from "@emotion/styled";
export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  position: fixed;
  z-index: "1";
  top: "0";
`;
const Header = ({ children }) => (
  <HeaderWrapper data-testid="testHeader">{children} </HeaderWrapper>
);

export default Header;
