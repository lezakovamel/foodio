import React from "react";

import styled from "@emotion/styled";
import { TitleWrapper } from "../atoms/TitleWrapper";
import { Icon } from "../atoms/Icon";
import { H3 } from "../atoms/Headlines";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeTypeEnum } from "../../tools/Enums";

const SwitcherWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  h3 {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ThemeSwitcher = ({ onSwitchTheme }) => {
  return (
    <SwitcherWrapper>
        <H3>Switch theme</H3>
      <Icon icon={faSun} onClick={() => onSwitchTheme(ThemeTypeEnum.LIGHT)} />
      <Icon icon={faMoon} onClick={() => onSwitchTheme(ThemeTypeEnum.DARK)} />
    </SwitcherWrapper>
  );
};

export default ThemeSwitcher;
