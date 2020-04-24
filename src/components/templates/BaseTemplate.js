import React from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";
import { H1 } from "../atoms/Headlines";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

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

const BaseTemplate = ({ title, children }) => {
  return (
    <Theme>
      <Base>
        <Header>
          <H1>{title}</H1>
        </Header>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer>Made with love and hate for css</Footer>
      </Base>
    </Theme>
  );
};

export default BaseTemplate;
