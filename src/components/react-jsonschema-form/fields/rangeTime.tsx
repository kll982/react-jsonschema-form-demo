import React, { useEffect, useState } from "react";
import { Col, Row, DatePicker, Space } from "antd";
import { JSONSchema7 } from "json-schema";
import { UiSchema } from "@rjsf/core";
import moment, { Moment } from "moment";

const dayYearForamt = 'YYYY-MM-DD'
const secondYearForamt = 'YYYY-MM-DD HH:mm:ss';
// Define a custom component for handling the root position object
export const RangeDate = (props: {
  onChange: (value: { start: string | undefined; end: string | undefined }) => void;
  formData: {
    start: string;
    end: string;
  };
  schema: JSONSchema7;
  uiSchema: UiSchema;
}) => {
  const { formData, onChange, uiSchema } = props;
  const options = uiSchema['ui:option'] || {};
  const [start, setStart] = useState<string | undefined>(formData?.start);
  const [end, setEnd] = useState<string | undefined>(formData?.end);
  const foramt = options.foramt || !options.showTime ? dayYearForamt : secondYearForamt;

  useEffect(() => {
    onChange && onChange({
      start,
      end,
    });
  }, [start, end]);

  const startChange = (date: Moment | null, dateStr: string) => {
    if (!!(date)) {
      setStart(dateStr)
      if (!!(end) && (moment(end) < date) || !!!end) {
        const dealDate = date?.add(1, 'days')?.format(foramt)
        setEnd(dealDate)
      }
    } else {
      setStart(undefined)
      setEnd(undefined)
    }
  }
  const endChange = (date: Moment | null, dateStr: string) => {
    if (!!date) {
      setEnd(dateStr)
      if (!!(start) && (date < moment(start)) || !!!start) {
        const dealDate = date?.subtract(1, 'days')?.format(foramt)
        setStart(dealDate)
      }
    } else {
      setStart(undefined)
      setEnd(undefined)
    }
  }

  return (
    <div>
      <Row>
        <Col span={24}>{props?.schema?.title}</Col>
        <Col>
          <Space wrap>
            <DatePicker
              allowClear
              foramt={foramt}
              {...options}
              showNow={false}
              value={start && moment(start) || undefined}
              onChange={startChange}
            />
            <DatePicker
              allowClear
              foramt={foramt}
              {...options}
              showNow={false}
              value={end && moment(end) || undefined}
              onChange={endChange}
            />
          </Space>
        </Col>
      </Row>
    </div>
  );
};
