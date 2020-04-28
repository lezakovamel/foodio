import { ThemeTypeEnum } from "./tools/Enums";

export const Control = (function () {
  var _user = "dopesickUser";
  var _theme = ThemeTypeEnum.LIGHT;

  return {
    getUser: function () {
      return _user;
    },
    setUser: function (user) {
      _user = user;
    },

    getTheme: function () {
      return _theme;
    },

    setTheme: function (theme) {
      _theme = theme;
    },
  };
})();
