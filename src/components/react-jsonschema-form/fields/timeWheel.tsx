import React, { useCallback, useEffect, useRef, useState } from "react";
import { Row, Col, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { RingCharts2 } from "components";
import { weekDays, dayliys, relationshipArr } from "@/mock/sunburst-data";
import _ from "lodash";
import { differenceArr } from "components/charts/utils";
import "./index.less";

interface TextAreaProps {
  formData: number[][];
  onChange: (value: number[][]) => void;
}

const TimeWheel = (props: TextAreaProps) => {
  const { formData = [[], [], [], []], onChange } = props;
  const timeChartsRef = useRef();

  const [timeValue, updateTimeValue] = useState(formData);

  const [text, setText] = useState<{ dayText: string[]; timeText: string[] }>({
    dayText: [],
    timeText: [],
  });

  useEffect(() => {
    onChange(timeValue);
    selectedText(timeValue);
  }, [timeValue]);

  const selectedText = useCallback(
    (selectedArr: number[][]) => {
      let dayText: string[] = [],
        timeText: string[] = [];
      selectedArr.map((_item, index) => {
        const item = [...new Set(_item)];
        switch (index) {
          case 0:
            if (item.length == relationshipArr[index].length) {
              dayText = ["All Week"];
            } else if (item.length == 1) {
              item.map((it) => (dayText = [weekDays[it].name]));
            } else {
              dayText = [];
            }
            break;
          case 2:
            if (item.length == 2) {
              timeText = ["All Day"];
            } else if (item.length == 1) {
              item.map((it) => (timeText = [dayliys[it].name]));
            } else {
              timeText = [];
            }
            break;
          case 1:
            if (item.length === 0) {
              dayText = [];
            } else {
              relationshipArr[index - 1].map((it: number[], idx: number) => {
                if (differenceArr(it, item).length > 0) {
                  const name = item
                    .map(
                      (key) =>
                        weekDays[idx].children.find(
                          (day: { index: number }) => key === day.index
                        )?.name
                    )
                    .filter((it) => !_.isNil(it));
                  dayText.push(...name);
                }
              });
            }
            break;
          case 3:
            if (item.length === 0) {
              timeText = [];
            } else {
              relationshipArr[index - 1].map((it: number[], idx: number) => {
                if (differenceArr(it, item).length > 0) {
                  const name = item
                    .map(
                      (key) =>
                        dayliys[idx].children.find(
                          (hour: { index: number }) => key === hour.index
                        )?.name
                    )
                    .filter((it) => !_.isNil(it));
                  timeText.push(...name);
                }
              });
            }
            break;
        }
      });
      setText({
        dayText,
        timeText,
      });
    },
    [timeValue]
  );

  return (
    <Row className="time-row">
      <div className="time-title">
        <div className="time-title-text">
          <Space>
            {text.timeText.join(", ")}
            {text.dayText.length && text.timeText.length ? " on " : null}
            {text.dayText.join(", ")}
          </Space>
          <CloseOutlined
            onClick={() => {
              timeChartsRef?.current?.onClearSelect();
            }}
          />
        </div>
      </div>
      <Col span={24}>
        <RingCharts2
          ref={timeChartsRef}
          onChange={(value: React.SetStateAction<number[][]>) => {
            updateTimeValue(value);
          }}
          value={timeValue}
        />
      </Col>
    </Row>
  );
};

export default TimeWheel;
