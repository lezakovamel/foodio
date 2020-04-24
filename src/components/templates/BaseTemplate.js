import React from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";
import { H1 } from "../atoms/Headlines";

const Base = styled.div`
  margin: auto;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  margin: auto;
  display: flex;
  padding-top: 10vh;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100vw;
  height: 10vh;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryLight} ;
  color: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  position: fixed;
  z-index: "5";
  top: "0";
`;
export const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  border-top: 2px solid ${(props) => props.theme.colors.primaryLight} ;
  color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const BaseTemplate = ({ title, children }) => {
  return (
    <Theme>
      <Base>
        <Header><H1>{title}</H1></Header>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer>Made with love and hate for css</Footer>
      </Base>
    </Theme>
  );
};

export default BaseTemplate;
