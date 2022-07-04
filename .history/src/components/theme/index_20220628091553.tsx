import React, { useState, useEffect, useRef } from "react";
import getAntdThemeVars from "./antd.default";
import { Button } from "antd";
import { FormatPainterOutlined } from "@ant-design/icons";
import { updateTheme } from "./lib/theme-updater";
import * as ThemeTypes from "./types";

import darkThemeVars from "./subjectResources/dark";
import greenDarkTheme from "./subjectResources/greenDark";
import lightThemeVars from "./subjectResources/light";

const IPAThemeVars = Object.keys(lightThemeVars);

import "./antd.variable.less";

const themes = {
  green: darkThemeVars(),
  dark: darkThemeVars(),
  light: lightThemeVars,
} as {
  [key: string]: ThemeTypes.IPAThemeVarCollection;
};

export function switchTheme(
  curTheme: ThemeTypes.ThemeKey | undefined,
  newTheme: ThemeTypes.ThemeKey
) {
  // const newTheme = 'dark';
  console.log("### newTheme:", newTheme);
  const antdVars = getAntdThemeVars(themes[newTheme]);
  debugger;
  const htmlDOM = document.getElementsByTagName("html")[0];
  if (curTheme) {
    htmlDOM.classList.remove(curTheme);
  }
  htmlDOM.classList.add(newTheme);
  htmlDOM.style.setProperty("--currentIPATheme", newTheme);
  //TODO: Persist the theme in user's profile
  debugger;
  //   saveIPAThemeToLS(newTheme);
  updateTheme(themes[newTheme], htmlDOM);
  updateTheme(antdVars, htmlDOM);
}

export function ThemeSwitcher(props: { default?: ThemeTypes.ThemeKey }) {
  const currTheme = useRef<ThemeTypes.ThemeKey>(
    props.default ? props.default : "light"
  );
  function toggleTheme() {
    const newTheme = currTheme.current === "dark" ? "light" : "dark";
    // switchTheme(currTheme.current, newTheme);
    currTheme.current = newTheme;
  }
  switchTheme(undefined, currTheme.current);
  return (
    <div
      style={{
        height: "32px",
        width: "32px",
        position: "fixed",
        bottom: "60px",
        left: "12px",
        zIndex: 9999,
      }}
    >
      <Button
        type="primary"
        icon={<FormatPainterOutlined />}
        onClick={toggleTheme}
      ></Button>
    </div>
  );
}
export * from "./types";
