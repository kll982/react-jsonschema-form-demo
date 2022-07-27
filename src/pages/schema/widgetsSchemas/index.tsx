import React, { useState, useEffect } from "react";
import RjsfForm from "@rjsf/antd";
import {
  defaultWidgets,
  defaultFields,
  defaultSchema,
  defaultUiSchema,
} from "./utils";
import _ from "lodash-contrib";
import { RjsfProps } from "components/react-jsonschema-form/interface";
import "../index.less";

const RjsfFormComponent: React.FC<any> = RjsfForm as any;

export const WidgetsForm = (props: RjsfProps) => {
  const {
    schema = defaultSchema,
    uiSchema = defaultUiSchema,
    widgets = defaultWidgets,
    fields = defaultFields,
    className = "",
    children,
    formData = {},
    onSubmit = (val: object) => void val,
    onChange = (val: object) => void val,
    onError = (val: Array<object>) => void val,
  } = props;

  const [_uiSchema, set_uiSchema] = useState(uiSchema);

  useEffect(() => {
    //  button[type="button"] ,Need to define  button htmlType
    const uiSchema_submitButton = Object.assign(
      {
        norender: false,
        submitText: "submit",
        props: {
          type: "primary",
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
  const onFormChange = ({ formData }: { formData: object }) => {
    console.log("onFormChange", formData);
    onChange(formData);
  };

  const onFormError = (errors: Array<object>) => {
    onError(errors);
  };

  return (
    <div className={`form ${className}`}>
      <RjsfFormComponent
        widgets={widgets}
        schema={schema}
        uiSchema={_uiSchema}
        onSubmit={onFormSubmit}
        onError={onFormError}
        onChange={onFormChange}
        fields={fields}
        formData={formData}
      >
        {children && children}
      </RjsfFormComponent>
    </div>
  );
};
