import React, { useCallback, useEffect, useRef, useState } from "react";
import { Row, Col, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { RingCharts2 } from "components";
import { weekDays, dayliys, relationshipArr } from "@/mock/ring-data";
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

  const defaultValue = _.isArray(formData) ? formData : [[], [], [], []];
  const [timeValue, updateTimeValue] = useState(defaultValue);

  const [text, setText] = useState<{
    dayTextArr: string[];
    timeTextArr: string[];
  }>({
    dayTextArr: [],
    timeTextArr: [],
  });

  useEffect(() => {
    onChange(timeValue);
    selectedText(timeValue);
  }, [timeValue]);

  const selectedText = useCallback(
    (selectedArr: number[][]) => {
      let dayTextArr: string[] = [],
        timeTextArr: string[] = [];
      selectedArr.map((_item, index) => {
        const item = [...new Set(_item)];
        switch (index) {
          case 0:
            if (item.length == relationshipArr[index].length) {
              dayTextArr = ["All Week"];
            } else if (item.length == 1) {
              item.map((it) => (dayTextArr = [weekDays[it].name]));
            } else {
              dayTextArr = [];
            }
            break;
          case 2:
            if (item.length == 2) {
              timeTextArr = ["All Day"];
            } else if (item.length == 1) {
              item.map((it) => (timeTextArr = [dayliys[it].name]));
            } else {
              timeTextArr = [];
            }
            break;
          case 1:
            if (item.length === 0) {
              dayTextArr = [];
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
                  dayTextArr.push(...name);
                }
              });
            }
            break;
          case 3:
            if (item.length === 0) {
              timeTextArr = [];
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
                  timeTextArr.push(...name);
                }
              });
            }
            break;
        }
      });
      setText({
        dayTextArr,
        timeTextArr,
      });
    },
    [timeValue]
  );

  return (
    <Row className="time-row">
      <div className="time-title">
        {text.timeTextArr.length > 0 || text.dayTextArr.length > 0 ? (
          <div className="time-title-text">
            <Space>
              {text.timeTextArr.join(", ")}
              {text.dayTextArr.length > 0 && text.timeTextArr.length > 0
                ? " on "
                : null}
              {text.dayTextArr.join(", ")}
            </Space>
            <CloseOutlined
              onClick={() => {
                timeChartsRef?.current?.onClearSelect();
              }}
            />
          </div>
        ) : null}
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
