import React from "react";

import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 10vh;
  border-top: 2px solid ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin:auto;
  box-sizing:border-box;
`;

const Footer = ({ children }) => (
  <FooterWrapper data-testid="testFooter">{children}</FooterWrapper>
);

export default Footer;
