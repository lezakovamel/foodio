import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: auto;
  min-height: 100vh;
  display: flex;
`;

export const Header = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #ffb5b5;
  color: #a37676;
  position: fixed;
  z-index: "5";
  top: "0";
`;
export const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  background-color: #ffb5b5;
  color: #a37676;
  position: absolute;
  bottom: 0;
`;

const BaseTemplate = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      {children}
      <Footer>Made with love and hate for css</Footer>
    </Wrapper>
  );
};

export default BaseTemplate;
