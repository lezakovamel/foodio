import React from "react";

import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    primary: "#F2C12E",
    primaryLight: "#F2C46D",
    primaryDark: "#94753a",
    accent: "#ADD96C",
    background: "#D9A689",
    backgroundLight: "#fcebca",
    white: "#ffffff",
  },
  padding: {
    primary: "10px",
    medium: "25px",
    extended: "80px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
