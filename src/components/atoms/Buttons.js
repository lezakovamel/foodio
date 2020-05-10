import React from 'react';

import styled from "@emotion/styled";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Icon } from './Icon';

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

const BackButtonWrapper = styled.div`
  margin: auto;
`;

export const BackButton = ({ onBackwardClicked, backRef }) => {
  return (
    <BackButtonWrapper ref={backRef}>
      <Icon icon={faBackward} onClick={onBackwardClicked} />
    </BackButtonWrapper>
  );
};
