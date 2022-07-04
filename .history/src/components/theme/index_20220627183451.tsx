import React, { useState, useEffect, useRef } from "react";
import getAntdThemeVars from "./antd.default";
import * as ThemeTypes from "./types";

import "./antd.variable.less";

const themes = {} as {
  [key: string]: ThemeTypes.IPAThemeVarCollection;
};

export function switchTheme(
  curTheme: ThemeTypes.ThemeKey | undefined,
  newTheme: ThemeTypes.ThemeKey
) {
  // const newTheme = 'dark';
  // console.log('### newTheme:', newTheme);
  const antdVars = getAntdThemeVars(themes[newTheme]);
  const htmlDOM = document.getElementsByTagName("html")[0];
  if (curTheme) {
    htmlDOM.classList.remove(curTheme);
  }
  htmlDOM.classList.add(newTheme);
  htmlDOM.style.setProperty("--currentIPATheme", newTheme);
  //TODO: Persist the theme in user's profile

  //   saveIPAThemeToLS(newTheme);
  //   updateTheme(themes[newTheme], htmlDOM);
  //   updateTheme(antdVars, htmlDOM);
}
