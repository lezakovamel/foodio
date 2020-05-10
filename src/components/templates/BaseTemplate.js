import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";
import { H1 } from "../atoms/Headlines";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { AccountBox } from "../organisms/AccountBox";
import { UserContext } from "../../Control";
import { PageTypeEnum, ThemeTypeEnum, ModalTypeEnum } from "../../tools/Enums";
import { Icon } from "../atoms/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../atoms/FormFields";
import { ActionBox } from "../organisms/ActionBox";
import FoodModal from "./FoodModal/FoodModal";

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
  margin: auto 0 auto 3vw;
  visibility: ${(props) => props.visibility};
  transition: visibility 0s, opacity 0.2s linear;
  h1 {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }
`;

const SearchBar = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const BaseTemplate = ({ title, pageType, onSearchSubmit, children }) => {
  const titleRef = useRef();
  const searchRef = useRef();
  const { user } = useContext(UserContext);
  const [loginRoute, setLoginRoute] = useState("login");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalData, setModalData] = useState({
    type: ModalTypeEnum.ADD_FOOD,
    visibility: false,
    message: "",
  });

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

  const onDispalySearchClicked = () => {
    searchRef.current.style.visibility = "visible";
    searchRef.current.style.opacity = "1";
  };

  const onLoginClicked = () => {
    setLoginRoute(user.name !== "" ? "profile" : "login");
  };

  const openModal = (type, message) => {
    setModalData({ type: type, visibility: true, message: message });
  };
  const onModalClose = (type) => setModalData({ visibility: false });

  const onAddFoodClicked = () => {
    openModal(ModalTypeEnum.ADD_FOOD, "Add food.");
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
          <ActionBox
            onAddFoodClicked={onAddFoodClicked}
            onDispalySearchClicked={onDispalySearchClicked}
          />
          <AccountBox
            onAccountClicked={onLoginClicked}
            loginRoute={loginRoute}
          />
        </Header>
        <ContentWrapper>
          <FoodModal data={modalData} onClose={onModalClose} />
          {children}
        </ContentWrapper>
        <Footer>Made with love and hate for css</Footer>
      </Base>
    </Theme>
  );
};

export default BaseTemplate;
