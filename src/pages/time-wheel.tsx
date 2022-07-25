import React from "react";
import { Row, Col } from "antd";
import {
  SunburstCharts,
  SunburstCharts2,
  RingCharts,
  RingCharts2,
  RingHooks,
} from "components";

export const TimeWheel = () => {
  return (
    <Row gutter={[20, 8]}>
      <Col span={12}>
        <RingCharts />
      </Col>
      <Col span={12}>
        <RingCharts2 />
      </Col>
      <Col span={12}>{/* <RingHooks /> */}</Col>
      <Col span={12}>
        <SunburstCharts />
      </Col>
      <Col span={12}>
        <SunburstCharts2 />
      </Col>
    </Row>
  );
};
