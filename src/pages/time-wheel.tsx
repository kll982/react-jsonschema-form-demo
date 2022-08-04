import React from "react";
import { Row, Col, Space } from "antd";
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
      <Col>
        <RingCharts />
      </Col>
      <Col>
        <RingCharts2 />
      </Col>
      <Col>
        <RingHooks />
      </Col>
      <Col>
        <SunburstCharts />
      </Col>
      <Col>
        <SunburstCharts2 />
      </Col>
    </Row>
  );
};
