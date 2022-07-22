import React from "react";
import { Row, Col } from "antd";
import { CustomField } from "../interface";
import "./index.less";

function CustomFieldTemplate(props: CustomField) {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children,
    hidden,
  } = props;
  return (
    <Row className={classNames}>
      <Col className="label" span={4}>
        <label htmlFor={id} className={`${required ? "required" : ""}`}>
          {label}
        </label>
      </Col>
      {hidden ? null : (
        <Col className="content" span={20}>
          {children}
          <Col span={24}>
            <Col span={24} className="errors">
              {errors}
            </Col>

            <Col span={24} className="help">
              {help}
            </Col>
          </Col>
        </Col>
      )}
      <Col className="description" span={24}>
        {description}
      </Col>
    </Row>
  );
}

export default CustomFieldTemplate;
