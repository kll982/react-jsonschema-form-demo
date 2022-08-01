import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { Row, Col, Input } from "antd";
import { RingCharts2 } from "components";

interface TextAreaProps {
  formData: {
    timeWheel: number[][];
  };
  onChange: (value: { timeWheel: number[][] }) => void;
}

const TimeWheel = (props: TextAreaProps) => {
  const { formData, onChange } = props;
  const { timeWheel } = formData;

  useEffect(() => {
    console.log("timeWheel", timeWheel);
  }, [timeWheel]);
  const [text, setText] = useState<{ dayText: string; timeText: string }>({
    dayText: "",
    timeText: "",
  });

  const selectedText = (selectedArr: number[][]) => {
    let dayText = "",
      timeText = "";
    selectedArr.map((item, index) => {
      switch (index) {
        case 0:
          if (item.length == 2) {
            return (dayText = "这周");
          }
          break;
        case 2:
          if (item.length == 2) {
            return (timeText = "全天");
          }
          break;
        case 1:
        case 3:
          break;
      }
    });
    setText({ dayText, timeText });
    console.log("text", dayText, timeText);
  };

  return (
    <Row>
      <Col span={24}>
        {text.dayText} ---- {text.timeText}
      </Col>
      <Col span={24}>
        时间轮
        <RingCharts2 onChange={selectedText} value={timeWheel} />
      </Col>
    </Row>
  );
};

export default TimeWheel;
