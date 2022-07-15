import React from "react";
import "./App.less";
import { createRoot } from "react-dom/client";
// import { Link, BrowserRouter } from "react-router-dom";
import { Row, Col } from "antd";
import Router from "./route";
import {
  BasicLayoutForm as BaseForm,
  Themes,
  SunburstCharts,
  SunburstCharts2,
  RingCharts,
} from "./components";
import "./mock/mock";

const { ThemeSwitcher } = Themes;

class App extends React.Component {
  render() {
    return (
      <div className="formRoot">
        <Row>
          <Col span={12}>{/* <RingCharts /> */}</Col>
          <Col span={12}>
            <SunburstCharts />
          </Col>
          <Col span={12}>
            <SunburstCharts2 />
          </Col>
        </Row>
        {/* <ThemeSwitcher /> */}
      </div>
    );
  }
}

const container = document.getElementById("app") as HTMLElement;
createRoot(container).render(<App />);
