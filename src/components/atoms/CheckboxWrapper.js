import React from "react";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 200px;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`;

const CheckboxWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default CheckboxWrapper;

