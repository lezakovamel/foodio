import React from "react";

import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  padding: ${(props) => props.theme.padding.primary};
  cursor: pointer;
`;

export const Icon = ({ icon, onClick, color }) => {
  const iconColor = () => {
    if (color == null) {
      return (color = "#F2C12E");
    } else return color;
  };
  return (
    <IconWrapper>
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        color={iconColor()}
        onClick={onClick}
      />
    </IconWrapper>
  );
};
