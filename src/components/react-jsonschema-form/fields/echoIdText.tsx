import React, { ChangeEvent, TextareaHTMLAttributes } from 'react';
import { Col, Input, Row } from 'antd';
import { UiSchema } from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';

const { TextArea } = Input;

type Textvalue = TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
interface TextAreaProps {
  name: string;
  schema: JSONSchema7;
  uiSchema: UiSchema;
  formData: string;
  onChange: (value: Textvalue) => void;
}

const EchoSelectIdText = (props: TextAreaProps) => {
  const { formData, onChange, uiSchema } = props;
  const options = uiSchema['ui:option'] || {};
  return (
    <Row>
      <Col span={24}>
        <label>title</label>
      </Col>
      <Col span={24}>
        <TextArea
          allowClear
          autoSize={{ minRows: 5 }}
          style={{ width: '100%', maxHeight: 180, overflow: 'auto' }}
          placeholder={"id1, id2, id3..."}
          value={formData}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            onChange && onChange(e.target.value);
          }}
        />
      </Col>
    </Row>
  );
};

export default EchoSelectIdText;
