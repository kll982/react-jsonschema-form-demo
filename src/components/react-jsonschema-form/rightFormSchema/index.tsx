import React, { useState, useEffect } from "react";
import RjsfForm from "@rjsf/antd";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import {
  defaultWidgets,
  defaultFields,
  defaultSchema,
  defaultUiSchema,
} from "./utils";
import _ from "lodash-contrib";
import { JSONSchema7 } from "json-schema";
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
    onSubmit(formData);
  };

  const onFormError = (errors: Array<object>) => {
    onError(errors);
  };
  // useEffect(() => {}, [schema, uiSchema, formData]);

  return (
    <div className={`form ${className}`}>
      <RjsfFormComponent
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
