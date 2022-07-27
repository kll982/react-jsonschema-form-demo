import React, { useState, useEffect, MouseEventHandler } from "react";
import RjsfForm from "@rjsf/antd";
import {
  defaultWidgets,
  defaultFields,
  defaultSchema,
  defaultUiSchema,
} from "./utils";
import _ from "lodash-contrib";
import { RjsfProps } from "components/react-jsonschema-form/interface";
import {
  ObjectFieldTemplate,
  CustomFieldTemplate,
  CustomFieldLabelWidthTemplate,
} from "components/react-jsonschema-form/template";
import "../index.less";

const RjsfFormComponent: React.FC<any> = RjsfForm as any;

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
    onSubmit = (val: object) => void val,
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
        // ObjectFieldTemplate={ObjectFieldTemplate}
        // FieldTemplate={CustomFieldLabelWidthTemplate}
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
