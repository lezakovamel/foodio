import React from "react";

import styled from "@emotion/styled";

const Box = styled.div`
  width: 63%;
  height: 33%;
  box-sizing: border-box;
  padding: ${(props) => props.theme.padding.medium};
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/images/${(props) => props.name}.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 5;
`;

const IntroImages = () => {
  return (
    <>
      <Box>
        <Img name="burger" />
      </Box>
      <Box style={{ marginLeft: "auto" }}>
        <Img name="pasta" />
      </Box>
      <Box>
        <Img name="pizza" />
      </Box>
    </>
  );
};

export default IntroImages;
