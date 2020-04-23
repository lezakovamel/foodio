import React from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";

const Wrapper = styled.div`
  margin: auto;
  min-height: 100vh;
  display: flex;
`;

export const Header = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  align-content: center;
  position: fixed;
  z-index: "5";
  top: "0";
`;
export const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  bottom: 0;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  align-content: center;
`;

const BaseTemplate = ({ title, children }) => {
  return (
    <Theme>
      <Wrapper>
        <Header>{title}</Header>
        {children}
        <Footer>Made with love and hate for css</Footer>
      </Wrapper>
    </Theme>
  );
};

export default BaseTemplate;
