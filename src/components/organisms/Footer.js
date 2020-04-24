import React from "react";

import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 10vh;
  border-top: 2px solid ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Footer = () => <FooterWrapper data-testid="testFooter" />;

export default Footer;
