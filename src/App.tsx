import React from "react";
import "./App.less";
import { createRoot } from "react-dom/client";
// import { Link, BrowserRouter } from "react-router-dom";
import { Row, Col } from "antd";
import Router from "./route";

import {
  SunburstCharts,
  SunburstCharts2,
  RingCharts,
  RingCharts2,
  RingHooks,
  BasicLayoutForm,
} from "./components";
import "./mock/mock";

class App extends React.Component {
  render() {
    return (
      <div className="formRoot">
        <BasicLayoutForm />
        {/* <Row>
          <Col span={12}>
            <RingCharts />
          </Col>
          <Col span={12}>
            <RingCharts2 />
          </Col>
          <Col span={12}>
            <RingHooks />
          </Col>
          <Col span={12}>
            <SunburstCharts />
          </Col>
          <Col span={12}>
            <SunburstCharts2 />
          </Col>
        </Row> */}
      </div>
    );
  }
}

const container = document.getElementById("app") as HTMLElement;
createRoot(container).render(<App />);
