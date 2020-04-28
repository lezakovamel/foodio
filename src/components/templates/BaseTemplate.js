import React, { useState, useContext } from "react";
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
  padding-top: 10vh;
  width: 100%;
  height: 100%;
`;

const HeaderTitle = styled.div`
  margin-left: auto;
`;

const BaseTemplate = ({ title, onAccountClicked, children }) => {
  return (
    <Theme>
      <Base>
        <Header>
          <HeaderTitle>
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
