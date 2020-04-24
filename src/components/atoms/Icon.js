import React from "react";

import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.theme.padding.primary};
`;

export const Icon = ({ icon }) => (
  <IconWrapper>
    <FontAwesomeIcon icon={icon} size="2x" color="#F2C12E" />
  </IconWrapper>
);
