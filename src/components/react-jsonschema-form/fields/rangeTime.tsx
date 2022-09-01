import { Col, InputNumber, Row, DatePicker, Space } from "antd";
import { JSONSchema7 } from "json-schema";
import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";

const dayForamt = 'YYYY-MM-DD'
const secondForamt = 'YYYY-MM-DD HH:mm:ss'

// Define a custom component for handling the root position object
export const RangeDate = (props: {
  onChange: (value: { start: string | undefined; end: string | undefined }) => void;
  formData: {
    start: string;
    end: string;
  };
  schema: JSONSchema7;
}) => {
  const { formData } = props;
  const [start, setStart] = useState<string | undefined>(formData?.start);
  const [end, setEnd] = useState<string | undefined>(formData?.end);

  useEffect(() => {
    props.onChange({
      start,
      end,
    });
  }, [start, end]);

  const startChange = (date: Moment | null, dateStr: string) => {
    if (!!(date)) {
      setStart(dateStr)
      if (!!(end) && (moment(end) < date) || !!!end) {
        const dealDate = date?.add(1, 'days')?.format(dayForamt)
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
        const dealDate = date?.subtract(1, 'days')?.format(dayForamt)
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
          <Space>
            <DatePicker
              allowClear
              showNow={false}
              value={start && moment(start) || undefined}
              onChange={startChange}
            />
            <DatePicker
              allowClear
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

export const RangeDateTime = (props: {
  onChange: (value: { start: string | undefined; end: string | undefined }) => void;
  formData: {
    start: string;
    end: string;
  };
  schema: JSONSchema7;
}) => {
  const { formData } = props;
  const [start, setStart] = useState<string | undefined>(formData?.start);
  const [end, setEnd] = useState<string | undefined>(formData?.end);

  useEffect(() => {
    props.onChange({
      start,
      end,
    });
  }, [start, end]);

  const startChange = (date: Moment | null, dateStr: string) => {
    if (!!(date)) {
      setStart(dateStr)
      if (!!(end) && (date > moment(end)) || !!!end) {
        let dealDate = dateStr;
        if (date >= moment(end)) {
          dealDate = date.add(1, 'days')?.format(secondForamt)
        }
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
      if (!!(start) && (moment(start) > date) || !!!start) {
        let dealDate = dateStr;
        if (moment(start) >= date) {
          dealDate = date?.subtract(1, 'days')?.format(secondForamt)
        }
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
          <Space>
            <DatePicker
              allowClear
              showNow={false}
              showTime
              value={start && moment(start) || undefined}
              onChange={startChange}
            />
            <DatePicker
              allowClear
              showTime
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
