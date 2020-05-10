import React from "react";

import { ThemeProvider } from "emotion-theming";
import { ThemeTypeEnum } from "../tools/Enums";

const theme = {
  colors: {
    primary: "#F2C12E",
    primaryLight: "#F2C46D",
    primaryDark: "#94753a",
    accent: "#ADD96C",
    background: "#ffffff",
    backgroundLight: "#fcebca",
    white: "#ffffff",
  },
  padding: {
    primary: "10px",
    medium: "25px",
    extended: "80px",
  },
  breakpoints: {
    xs: "576px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

const darkTheme = {
  colors: {
    primary: "#F2C12E",
    primaryLight: "#F2C46D",
    primaryDark: "#94753a",
    accent: "#ADD96C",
    background: "#474747",
    backgroundLight: "#fcebca",
    white: "#fffffff",
  },
  padding: {
    primary: "10px",
    medium: "25px",
    extended: "80px",
  },
};

const Theme = ({ children, themeType }) => {
  return (
    <ThemeProvider
      theme={themeType === ThemeTypeEnum.LIGHT ? theme : darkTheme}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
