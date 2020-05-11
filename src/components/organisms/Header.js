import React from "react";

import styled from "@emotion/styled";
export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  position: fixed;
  z-index: 50;
  top: 0;
  margin: auto;
  box-sizing: border-box;
`;
const Header = ({ children }) => (
  <HeaderWrapper data-testid="testHeader">{children} </HeaderWrapper>
);

export default Header;
