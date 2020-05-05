import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";
import { H1 } from "../atoms/Headlines";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { AccountBox } from "../organisms/AccountBox";
import { UserContext } from "../../Control";

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
  min-height: 90vh;
`;

export const HeaderTitle = styled.div`
  margin-left: 5vw;
  visibility: ${(props) => props.visibility};
  transition: visibility 0s, opacity 0.2s linear;
`;

//TODO determine pageType for visibility , main not visible, other visible

const BaseTemplate = ({ title, pageType, children }) => {
  const titleRef = useRef();
  const { user } = useContext(UserContext);
  const [loginRoute, setLoginRoute] = useState("login");

  useEffect(() => {
    window.addEventListener("scroll", onScrollChanged);

    titleRef.current.style.visibility = "hidden";
    titleRef.current.style.opacity = "0";
  }, []);

  const onScrollChanged = (event) => {
    if (window.scrollY >= window.innerHeight) {
      titleRef.current.style.visibility = "visible";
      titleRef.current.style.opacity = "1";
    }
    if (window.scrollY <= window.innerHeight) {
      titleRef.current.style.visibility = "hidden";
      titleRef.current.style.opacity = "0";
    }
  };

  const onLoginClicked = () => {
    setLoginRoute(user.name !== "" ? "profile" : "login");
  };

  return (
    <Theme>
      <Base>
        <Header>
          <HeaderTitle ref={titleRef}>
            <H1>{title}</H1>
          </HeaderTitle>
          <AccountBox
            onAccountClicked={onLoginClicked}
            loginRoute={loginRoute}
          />
        </Header>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer>Made with love and hate for css</Footer>
      </Base>
    </Theme>
  );
};

export default BaseTemplate;
