import React from "react";

import styled from "@emotion/styled";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

export const Button = styled.button`
  box-sizing: border-box;
  width: 20vw;
  height: 5vh;
  margin-top: 3vh;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;
export const TitleButton = styled.button`
  margin: auto;

  box-sizing: border-box;
  height: 5vh;
  margin-top: 3vh;
  background-color: rgba(255, 255, 255, 0.5);
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.colors.primary};
  backdrop-filter: blur(2px);
  transition: 0.3s ease-in-out;
  :focus {
    outline: 0;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.8);
    transition: 0.3s ease-in-out;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: ${(props) => props.theme.padding.primary};
    width: 250px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: ${(props) => props.theme.padding.medium};
    width: 20vw;
  }
`;

const BackButtonWrapper = styled.div`
  margin: 0;
`;

export const BackButton = ({ onBackwardClicked, backRef }) => {
  return (
    <BackButtonWrapper ref={backRef}>
      <Icon icon={faBackward} onClick={onBackwardClicked} />
    </BackButtonWrapper>
  );
};
