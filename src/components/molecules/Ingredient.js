import React, { useState } from "react";

import styled from "@emotion/styled";

const InnerUl = styled.ul`
  display: ${(props) => props.display};
  li {
    background: none !important;
    color: ${(props) => props.theme.colors.primaryDark} !important;
  }
`;

const Ingredient = ({ ingredient, amount, unit }) => {
  const [display, setDisplay] = useState("none");
  const showAmount = () => {
    if (display === "none") {
      setDisplay("visible");
    } else {
      setDisplay("none");
    }
  };
  return (
    <li onClick={showAmount}>
      {ingredient}
      <InnerUl display={display}>
        <li>
          {amount} {unit}
        </li>
      </InnerUl>
    </li>
  );
};

export default Ingredient;
