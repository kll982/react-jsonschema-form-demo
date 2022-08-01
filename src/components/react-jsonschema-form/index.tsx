import React, { useState, useEffect } from "react";
import RjsfForm from "@rjsf/antd";
import { RjsfProps } from "components/react-jsonschema-form/interface";
import { defaultWidgets, defaultFields } from "./configuration";

import _ from "lodash-contrib";
import "./index.less";
import { JSONSchema7 } from "json-schema";
import { UiSchema } from "@rjsf/core";
import { CustomField, CustomizeFormProperties } from "./interface";

const RjsfFormComponent: React.FC<any> = RjsfForm as any;

interface RjsfProps {
  schema?: JSONSchema7;
  uiSchema?: UiSchema;
  widgets?: object;
  fields?: object;
  className?: string;
  children?: React.ReactNode;
  formData?: object;
  onSubmit?: (val: object) => void;
  onError?: (val: Array<object>) => void;
  onChange?: (val: object) => void;
  ObjectFieldTemplate?: (props: CustomizeFormProperties) => JSX.Element;
  FieldTemplate?: (props: CustomField) => JSX.Element;
}

export const RenderRjsfForm = (props: RjsfProps) => {
  const {
    uiSchema = {},
    className = "",
    children,
    onSubmit,
    onError,
    onChange,
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
    onSubmit && onSubmit(formData);
  };
  const onFormChange = _.debounce(({ formData }: { formData: object }) => {
    console.log("onFormChange", formData);
    onChange && onChange(formData);
  }, 500);

  const onFormError = (errors: Array<object>) => {
    console.log("onFormError", errors);
    onError && onError(errors);
  };

  return (
    <div className={`form ${className}`}>
      <RjsfFormComponent
        widgets={defaultWidgets}
        fields={defaultFields}
        schema={{}}
        formData={{}}
        {...props}
        uiSchema={_uiSchema}
        onSubmit={onFormSubmit}
        onError={onFormError}
        onChange={onFormChange}
      >
        {children && children}
      </RjsfFormComponent>
    </div>
  );
};
