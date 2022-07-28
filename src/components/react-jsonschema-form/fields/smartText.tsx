import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { Row, Col, Checkbox } from "antd";
import { Textarea as TextareaWidget } from "../widgets";

type Textvalue = TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
interface TextAreaProps {
  formData: {
    text: Textvalue;
    check: boolean;
  };
  onChange: (value: { text: Textvalue; check: boolean }) => void;
}

const SmartText = (props: TextAreaProps) => {
  const { formData, onChange } = props;

  return (
    <Row>
      <Col span={24}>
        <Checkbox
          checked={formData.check}
          onChange={(e) => {
            const { checked } = e.target;
            onChange && onChange({ ...formData, check: checked });
          }}
        >
          Quick search from nodes
        </Checkbox>
      </Col>
      <Col span={24}>
        <TextareaWidget
          value={formData.text}
          onChange={(value) => {
            onChange && onChange({ ...formData, text: value });
          }}
        />
      </Col>
    </Row>
  );
};

export default SmartText;
