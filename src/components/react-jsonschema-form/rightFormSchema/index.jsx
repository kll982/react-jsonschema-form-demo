import React, { useState, useEffect } from "react";
import RjsfForm from "@rjsf/antd";
import { ErrorBoundary } from "react-error-boundary";
import {
  defaultWidgets,
  defaultFields,
  defaultSchema,
  defaultUiSchema,
} from "./utils";
import "../index.less";

export const BasicLayoutForm = (props) => {
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

  const onFormSubmit = ({ formData }) => {
    console.log("Data submitted: ", formData);
    onSubmit(formData);
  };

  const onFormError = (errors) => {
    console.log("errors", errors);
    onError(errors);
  };

  return (
    <div className={`form ${className}`}>
      <ErrorBoundary>
        <RjsfForm
          widgets={widgets}
          schema={schema}
          uiSchema={_uiSchema}
          onSubmit={onFormSubmit}
          onError={onFormError}
          fields={fields}
          formData={formData}
        >
          {children && children}
        </RjsfForm>
      </ErrorBoundary>
    </div>
  );
};
