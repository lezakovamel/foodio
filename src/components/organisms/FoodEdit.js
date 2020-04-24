import React from "react";

import styled from "@emotion/styled";
import { P } from "../atoms/TextFields";

export const Modal = styled.div`
  display: ${(props) => props.visibility};
  position: fixed;
  z-index: 50; /* ;) */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  filter: blur(4px);
  background-color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  margin: auto;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  width: 80%;
  z-index: 101;
`;

const FoodEdit = ({ visibility, close }) => {
  return (
    <Modal visibility={visibility} onClick={close}>
      <ModalContent>
        <P>Popiči okynko</P>
      </ModalContent>
    </Modal>
  );
};

export default FoodEdit;
