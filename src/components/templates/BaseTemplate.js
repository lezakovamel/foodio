import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";
import { H1 } from "../atoms/Headlines";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { AccountBox } from "../organisms/AccountBox";
import { UserContext } from "../../Control";
import { PageTypeEnum, ThemeTypeEnum } from "../../tools/Enums";
import { Icon } from "../atoms/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../atoms/FormFields";

const Base = styled.div`
  margin: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
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

const SearchBar = styled.div`
  display: flex;
`;

const BaseTemplate = ({ title, pageType, onSearchSubmit, children }) => {
  const titleRef = useRef();
  const searchRef = useRef();
  const { user } = useContext(UserContext);
  const [loginRoute, setLoginRoute] = useState("login");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (pageType === PageTypeEnum.MAIN) {
      window.addEventListener("scroll", onScrollChanged);

      //default state
      titleRef.current.style.visibility = "hidden";
      titleRef.current.style.opacity = "0";
      searchRef.current.style.visibility = "hidden";
      searchRef.current.style.opacity = "0";
    } else {
      searchRef.current.style.visibility = "hidden";
      searchRef.current.style.opacity = "0";
    }
    searchRef.current.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        //TODO resolve empty text on submit, useEffect blocking ?
        onSearchSubmit(searchQuery);
      }
    });
  }, []);

  const onScrollChanged = (event) => {
    if (window.scrollY >= window.innerHeight) {
      titleRef.current.style.visibility = "visible";
      titleRef.current.style.opacity = "1";
      searchRef.current.style.visibility = "visible";
      searchRef.current.style.opacity = "1";
    }
    if (window.scrollY <= window.innerHeight) {
      titleRef.current.style.visibility = "hidden";
      titleRef.current.style.opacity = "0";
      searchRef.current.style.visibility = "hidden";
      searchRef.current.style.opacity = "0";
    }
  };

  const onLoginClicked = () => {
    setLoginRoute(user.name !== "" ? "profile" : "login");
  };

  return (
    <Theme
      themeType={
        user.theme === ThemeTypeEnum["LIGHT"]
          ? ThemeTypeEnum.LIGHT
          : ThemeTypeEnum.DARK
      }
    >
      <Base>
        <Header>
          <HeaderTitle ref={titleRef}>
            <H1>{title}</H1>
          </HeaderTitle>
          <SearchBar ref={searchRef}>
            <Icon icon={faSearch} />
            <Input type="text" value={searchQuery} setValue={setSearchQuery} />
          </SearchBar>
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
