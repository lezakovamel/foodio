import React, { useState } from "react";
import "./App.scss";

import Routes from "./routes";
import { UserContext } from "./Control";
import { ThemeTypeEnum } from "./tools/Enums";

const App = () => {
  const [user, setUser] = useState({ name: "", theme: ThemeTypeEnum.LIGHT });
  const userValue = { user, setUser };

  return (
    <UserContext.Provider value={userValue}>
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
