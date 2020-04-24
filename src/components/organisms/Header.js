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
  z-index: "5";
  top: "0";
`;
const Header = () => <HeaderWrapper data-testid='testHeader'/>;

export default Header;
