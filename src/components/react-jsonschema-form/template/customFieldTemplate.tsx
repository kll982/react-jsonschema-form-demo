import React from "react";
import { Row, Col, Tooltip, Space } from "antd";
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
    schema,
  } = props;
  const { title } = schema;
  return (
    <Row className={`${title ? "rjsf-row" : ""} ${classNames}`} gutter={[8, 8]}>
      {label && (
        <Col className="rjsf-label" span={title ? 24 : 4}>
          <Tooltip title={label}>
            <label htmlFor={id} className={`${required ? "required" : ""}`}>
              {label}
            </label>
          </Tooltip>
        </Col>
      )}
      {hidden ? null : (
        <Col className="content" span={title ? 24 : 20}>
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

function CustomFieldLabelWidthTemplate(props: CustomField) {
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
    schema,
  } = props;
  const { title } = schema;
  return (
    <Row
      className={`${title ? "rjsfLeftWidth-row" : ""} ${classNames}`}
      gutter={[8, 8]}
    >
      {hidden ? null : (
        <Col className="rjsfLeftWidth-Field" span={24}>
          <div className={`rjsfLeftWidth-label ${label ? "label" : "noLabel"}`}>
            <Tooltip title={label}>
              <label htmlFor={id} className={`${required ? "required" : ""}`}>
                {label}
              </label>
            </Tooltip>
          </div>
          <div className="rjsfLeftWidth-content">{children}</div>
        </Col>
      )}

      <Col span={24} className="errors">
        {errors}
      </Col>

      <Col span={24} className="help">
        {help}
      </Col>
      <Col className="description" span={24}>
        {description}
      </Col>
    </Row>
  );
}

export { CustomFieldTemplate, CustomFieldLabelWidthTemplate };
