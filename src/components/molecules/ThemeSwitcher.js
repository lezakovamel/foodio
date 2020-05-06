import React from "react";

import styled from "@emotion/styled";
import { TitleWrapper } from "../atoms/TitleWrapper";
import { Icon } from "../atoms/Icon";
import { H5 } from "../atoms/Headlines";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const SwitcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThemeSwitcher = ({ onSwitchTheme }) => {
  return (
    <SwitcherWrapper>
      <TitleWrapper>
        <H5>Switch theme</H5>
      </TitleWrapper>
      <Icon icon={faSun} onClick={onSwitchTheme} />
      <Icon icon={faMoon} onClick={onSwitchTheme} />
    </SwitcherWrapper>
  );
};

export default ThemeSwitcher;
