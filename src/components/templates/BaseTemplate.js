import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import Theme from "../../styles/Theme";
import { H1 } from "../atoms/Headlines";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { AccountBox } from "../organisms/AccountBox";
import { UserContext } from "../../Control";
import { PageTypeEnum, ThemeTypeEnum, ModalTypeEnum } from "../../tools/Enums";
import { ActionBox } from "../organisms/ActionBox";
import FoodModal from "./FoodModal/FoodModal";
import { useHistory } from "react-router";
import { BackButton } from "../atoms/Buttons";

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

const BaseTemplate = ({ title, pageType, children }) => {
  const titleRef = useRef();
  const backRef = useRef();
  const { push } = useHistory();
  const { user } = useContext(UserContext);
  const [loginRoute, setLoginRoute] = useState("login");
  const [modalData, setModalData] = useState({
    type: ModalTypeEnum.ADD_FOOD,
    visibility: false,
    message: "",
  });
  const history = useHistory();

  useEffect(() => {
    if (pageType === PageTypeEnum.MAIN) {
      window.addEventListener("scroll", onScrollChanged);

      //default state
      titleRef.current.style.visibility = "hidden";
      titleRef.current.style.opacity = "0";
      console.log("yes");
      
      backRef.current.style.display = "none";
    } else {
      backRef.current.style.display = "inline-block";
    }
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

  const onDispalySearchClicked = () => {
    push("/search");
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

  const onBackwardClicked = () => {
    if (pageType !== PageTypeEnum.MAIN) {
      history.goBack();
    }
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
          <BackButton onBackwardClicked={onBackwardClicked} backRef={backRef} />
          <HeaderTitle ref={titleRef}>
            <H1>{title}</H1>
          </HeaderTitle>
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
