import React from "react";

import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.theme.padding.primary};
  cursor:pointer;
`;

export const Icon = ({ icon, onClick }) => (
  <IconWrapper>
    <FontAwesomeIcon icon={icon} size="2x" color="#F2C12E" onClick={onClick}/>
  </IconWrapper>
);
