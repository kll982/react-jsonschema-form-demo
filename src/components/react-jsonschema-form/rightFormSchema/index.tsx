import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import RjsfForm from "@rjsf/antd";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import {
  defaultWidgets,
  defaultFields,
  defaultSchema,
  defaultUiSchema,
} from "./utils";
import _ from "lodash-contrib";
import { JSONSchema7, JSONSchema7Definition } from "json-schema";
import { UiSchema } from "@rjsf/core";
import "../index.less";

const RjsfFormComponent: React.FC<any> = RjsfForm as any;

interface RjsfProps {
  schema?: JSONSchema7;
  uiSchema?: UiSchema;
  widgets?: object;
  fields?: object;
  className?: string;
  children?: HTMLElement;
  formData?: object;
  onSubmit?: (val: object) => void;
  onError?: (val: Array<object>) => void;
}

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

const ObjectFieldTemplate = (props: JSONSchema7) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} style={{ color: "red" }}>
        {props.title}
      </Col>
      <Col span={24}>{props.description}</Col>
      {props?.properties &&
        props?.properties?.map((element: JSONSchema7Definition) => {
          const colOption =
            element?.content?.props?.uiSchema?.colOption ||
            element?.content?.props?.schema?.colOption;
          return (
            <Col span={24} {...colOption}>
              {element?.content}
            </Col>
          );
        })}
    </Row>
  );
};

export const BasicLayoutForm = (props: RjsfProps) => {
  const {
    schema = defaultSchema,
    uiSchema = defaultUiSchema,
    widgets = defaultWidgets,
    fields = defaultFields,
    className = "",
    children,
    formData = {},
    // objeoctFieldTemplate, // return JSX Element,可通过 "ui:ObjectFieldTemplate" 字段定义,此处暂不做处理
    onSubmit = (val) => void val,
    onError = (val) => void val,
  } = props;

  const [_uiSchema, set_uiSchema] = useState(uiSchema);
  const handleError = useErrorHandler();

  useEffect(() => {
    //  button[type="button"] ,Need to define  button htmlType
    const uiSchema_submitButton = Object.assign(
      {
        norender: false,
        submitText: "submit",
        props: {
          htmlType: "submit",
        },
      },
      uiSchema["ui:submitButtonOptions"] || {}
    );
    uiSchema_submitButton["props"]["htmlType"] = "submit";
    set_uiSchema({
      ...uiSchema,
      "ui:submitButtonOptions": uiSchema_submitButton,
    });
  }, [uiSchema]);

  const onFormSubmit = ({ formData }: { formData: object }) => {
    console.log("onFormSubmit", formData);
    onSubmit(formData);
  };

  const onFormError = (errors: Array<object>) => {
    onError(errors);
  };
  // useEffect(() => {}, [schema, uiSchema, formData]);

  return (
    <div className={`form ${className}`}>
      <RjsfFormComponent
        ObjectFieldTemplate={ObjectFieldTemplate}
        widgets={widgets}
        schema={schema}
        uiSchema={_uiSchema}
        onSubmit={onFormSubmit}
        onError={onFormError}
        fields={fields}
        formData={formData}
      >
        {children && children}
      </RjsfFormComponent>
    </div>
  );
};
