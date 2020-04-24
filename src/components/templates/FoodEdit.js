import React from "react";

import styled from "@emotion/styled";
import { P } from "../atoms/TextFields";
import EditForm from "../organisms/EditForm";
import { H1 } from "../atoms/Headlines";

export const Modal = styled.div`
  display: ${(props) => props.visibility};
  position: fixed;
  z-index: 50; /* ;) */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /*filter: blur(4px);*/
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  margin:auto;
  box-sizing:border-box;
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 20vh;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  width: 80%;
  z-index: 101;
  box-sizing:border-box;
  position:relative;
`;

const FoodEdit = ({ visibility, close }) => {
  return (
    <Modal visibility={visibility} onClick={close}>
      <ModalContent>
        <H1>_food_name_</H1>
        <EditForm />
      </ModalContent>
    </Modal>
  );
};

export default FoodEdit;
