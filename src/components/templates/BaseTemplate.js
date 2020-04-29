import React from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";
import { H1 } from "../atoms/Headlines";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { AccountBox } from "../organisms/AccountBox";

const Base = styled.div`
  margin: auto;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  width: 100%;
  height: 100%;
`;

export const HeaderTitle = styled.div`
  margin-left: 5vw;
  visibility: ${(props) => props.visibility};
  transition: visibility 0s, opacity 0.2s linear;
`;

const BaseTemplate = ({ title, onAccountClicked, titleRef, children }) => {
  return (
    <Theme>
      <Base>
        <Header>
          <HeaderTitle ref={titleRef}>
            <H1>{title}</H1>
          </HeaderTitle>
          <AccountBox onAccountClicked={onAccountClicked} />
        </Header>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer>Made with love and hate for css</Footer>
      </Base>
    </Theme>
  );
};

export default BaseTemplate;
