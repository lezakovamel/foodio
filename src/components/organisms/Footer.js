import React from "react";

import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import BackToTop from "react-back-to-top-button";
import styled from "@emotion/styled";

import { Icon } from "../atoms/Icon";

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
  margin: auto;
  box-sizing: border-box;
`;

const BackWrapper = styled.div`
  button {
    font-size: 30px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    button {
      font-size: 20px;
      &:focus {
        outline: none;
      }
    }
  }
`;

const Footer = ({ children }) => (
  <>
    <BackWrapper>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <Icon icon={faArrowCircleUp} color="#ffffff" />
      </BackToTop>
    </BackWrapper>

    <FooterWrapper data-testid="testFooter">{children}</FooterWrapper>
  </>
);

export default Footer;
