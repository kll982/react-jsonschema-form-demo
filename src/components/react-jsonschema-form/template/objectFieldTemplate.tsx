import React from "react";
import { Row, Col } from "antd";
import _ from "lodash-contrib";
import { isArray, isBoolean } from "lodash";
import { CustomizeFormProperties } from "../interface";
import "../index.less";

/**
 * @function Rendering of form
 * @description Reset the rendering of the form
 * @param
 * 
   1. UiSchema[key].colOption , // Reference antd <Col>
   2. schema[key].colOption , // Reference antd <Col>
   1 > 2
 *
 * @version 0.1
 */

const ObjectFieldTemplate = (props: CustomizeFormProperties) => {
  return (
    <Row gutter={[8, 8]}>
      {isArray(props?.properties) &&
        props?.properties?.map((element, index) => {
          let content,
            colOption = {};
          if (!isBoolean(element)) {
            content = element?.content;
            const { uiSchema = {}, schema = {} } = content?.props || {
              uiSchema: {},
              schema: {},
            };
            colOption = uiSchema?.colOption || schema?.colOption;
          }

          return (
            <Col span={24} className="rjsf-form-row" {...colOption} key={index}>
              {content}
            </Col>
          );
        })}
    </Row>
  );
};

export default ObjectFieldTemplate;
