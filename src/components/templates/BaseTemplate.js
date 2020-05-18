import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import Theme from "../../styles/Theme";
import { DeskH1 } from "../atoms/Headlines";
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

const IconsWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;

const BaseTemplate = ({ title, pageType, data, children }) => {
  const backRef = useRef();
  const { user } = useContext(UserContext);
  const { push } = useHistory();
  const [modalData, setModalData] = useState({
    type: ModalTypeEnum.ADD_FOOD,
    visibility: false,
    message: "",
    payload: null,
  });
  const history = useHistory();

  const [addData, setAddData] = useState({});
  useEffect(() => {
    if (pageType === PageTypeEnum.MAIN) {
      backRef.current.style.display = "none";
    } else {
      backRef.current.style.display = "inline-block";
    }
  }, []);

  const onLoginClicked = () => {
    push(user.surname !== undefined ? "/profile" : "/login");
  };

  const openModal = (type, message, payload) => {
    setModalData({
      type: type,
      visibility: true,
      message: message,
      payload: payload,
    });
  };
  const onModalClose = (type) => setModalData({ visibility: false });

  const onAddFoodClicked = () => {
    openModal(ModalTypeEnum.ADD_FOOD, "Add food.", {
      title: "",
      preparationTime: "",
      ingredients: [],
      direction: "",
    });
  };

  const onAddFoodSubmit = async (data, selectedIngre) => {
    const ingreToSubmit = selectedIngre.map((ing) => ing.label);
    try {
      await axios.post("https://exercise.cngroup.dk/api/recipes", data);
      push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const onSearchClicked = () => {
    openModal(ModalTypeEnum.SEARCH, "Search.", data);
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
          <HeaderTitle>
            <DeskH1>{title}</DeskH1>
          </HeaderTitle>
          <IconsWrapper>
            <ActionBox
              onAddFoodClicked={onAddFoodClicked}
              onSearchClicked={onSearchClicked}
              pageType={pageType}
            />
            <AccountBox onAccountClicked={onLoginClicked} />
          </IconsWrapper>
        </Header>
        <ContentWrapper>
          <FoodModal
            data={modalData}
            onClose={onModalClose}
            onAddNew={onAddFoodSubmit}
          />
          {children}
        </ContentWrapper>
        <Footer>AV2MW 2020</Footer>
      </Base>
    </Theme>
  );
};

export default BaseTemplate;
