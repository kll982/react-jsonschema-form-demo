import React from "react";
import "./App.less";
import { createRoot } from "react-dom/client";
// import { Link, BrowserRouter } from "react-router-dom";
import Router from "./route";
import {
  BasicLayoutForm as BaseForm,
  Themes,
  SunburstCharts,
  RingCharts,
} from "./components";
import "./mock/mock";

const { ThemeSwitcher } = Themes;

class App extends React.Component {
  render() {
    return (
      <div className="formRoot">
        {/* <RingCharts /> */}
        <SunburstCharts />
        {/* <ThemeSwitcher /> */}
      </div>
    );
  }
}

const container = document.getElementById("app") as HTMLElement;
createRoot(container).render(<App />);
