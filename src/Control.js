import React from "react";
import { ThemeTypeEnum } from "./tools/Enums";

export const UserContext = React.createContext({
  user: { name: "", theme: ThemeTypeEnum.LIGHT },
  setUser: () => {},
});