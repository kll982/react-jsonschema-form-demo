import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { Row, Col, Checkbox, Input } from "antd";
import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

const { TextArea } = Input;

type Textvalue = TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
interface TextAreaProps {
  schema: JSONSchema7;
  uiSchema: UiSchema;
  formData: {
    text: Textvalue;
    check: boolean;
  };
  onChange: (value: { text: Textvalue; check: boolean }) => void;
}

const SmartText = (props: TextAreaProps) => {
  const { formData, onChange, uiSchema } = props;
  const options = uiSchema["ui:option"] || {};
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
        <TextArea
          data-prefix={options.prefix}
          value={formData.text}
          allowClear
          autoSize={{ minRows: 5 }}
          onChange={(e) => {
            onChange && onChange({ ...formData, text: e.target.value });
          }}
          style={{ width: "100%", maxHeight: 180, overflow: "auto" }}
        />
      </Col>
    </Row>
  );
};

export default SmartText;
