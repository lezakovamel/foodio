import React from "react";
import { withScroll } from "react-window-decorators";
import styled from "@emotion/styled";
const divWidth = () => {
  const width = window.pageYOffset;
  console.log("tu sirka: " + width);
  return width;
};
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
const DivLine = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: ${divWidth()};
  background: green;
`;
const Header = ({ children }) => {
  return (
    <HeaderWrapper data-testid="testHeader">
      {children}
      <p>Vertical scroll position is: </p>
      <DivLine />
    </HeaderWrapper>
  );
};

export default withScroll(Header);
