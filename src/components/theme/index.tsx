import React, { useState, useEffect, useRef } from "react";
import getAntdThemeVars from "./antd.default";
import { Button, Select } from "antd";
import { updateTheme } from "./lib/theme-updater";
import * as ThemeTypes from "./types";

import darkThemeVars from "./subjectResources/dark";
import greenDarkTheme from "./subjectResources/greenDark";
import lightThemeVars from "./subjectResources/light";

const IPAThemeVars = Object.keys(lightThemeVars);

import "./antd.variable.less";

const { Option } = Select;

const themes = {
  green: greenDarkTheme,
  dark: darkThemeVars,
  light: lightThemeVars,
} as {
  [key: string]: ThemeTypes.IPAThemeVarCollection;
};

const getIPAThemes = () => localStorage.getItem("curTheme") || "light";
const setIPAThemes = (newTheme: ThemeTypes.ThemeKey) =>
  localStorage.setItem("curTheme", newTheme);

function switchTheme(
  curTheme: ThemeTypes.ThemeKey | undefined,
  newTheme: ThemeTypes.ThemeKey
) {
  // const newTheme = 'dark';
  const antdVars = getAntdThemeVars(themes[newTheme]);
  const htmlDOM = document.getElementsByTagName("html")[0];
  if (curTheme) {
    htmlDOM.classList.remove(curTheme);
  }
  htmlDOM.classList.add(newTheme);
  htmlDOM.style.setProperty("--currentIPATheme", newTheme);
  //TODO: Persist the theme in user's profile
  //   saveIPAThemeToLS(newTheme);
  updateTheme(themes[newTheme], htmlDOM);
  updateTheme(antdVars, htmlDOM);
}

function ThemeSwitcher(props: { default?: ThemeTypes.ThemeKey }) {
  const currTheme = useRef<ThemeTypes.ThemeKey>(
    props.default ? props.default : "light"
  );

  switchTheme(undefined, currTheme.current);

  const changeTheme = (newTheme: ThemeTypes.ThemeKey) => {
    switchTheme(currTheme.current, newTheme);
    currTheme.current = newTheme;
  };
  return (
    <Select
      style={{
        width: "120px",
        position: "absolute",
        top: "60px",
        right: "120px",
        zIndex: 9999,
      }}
      onChange={changeTheme}
      value={currTheme.current}
    >
      {Object.keys(themes).map((theme) => (
        <Option value={theme} key={theme}>
          {theme}
        </Option>
      ))}
    </Select>
  );
}

export * from "./types";

export { themes, switchTheme, IPAThemeVars, ThemeSwitcher, getIPAThemes };
