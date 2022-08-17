import React, { useState, useEffect, useRef } from "react";
import RjsfForm from "@rjsf/antd";
import { RjsfProps } from "./interface";
import { defaultWidgets, defaultFields } from "./configuration";
import { debounce } from "loadsh";
// import _ from "lodash-contrib";
import "./index.less";
import { Form } from "antd";

const RjsfFormComponent: React.FC<any> = RjsfForm as any;

export const RenderRjsfForm = (props: RjsfProps) => {
  const {
    uiSchema = {},
    className = "",
    children,
    onSubmit,
    onError,
    onChange,
    tagName,
    noSubmit,
  } = props;
  const rjsfRef = useRef<any>();

  const [_uiSchema, set_uiSchema] = useState(uiSchema);

  useEffect(() => {
    if (!tagName || (tagName && tagName === "form")) {
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
    }
  }, [uiSchema, tagName]);

  const onFormSubmit = (
    { formData, errors, ...data }: { formData: object; errors: Array<object> },
    e: MouseEvent
  ) => {
    console.log("onFormSubmit", formData, data);
    if ((tagName && tagName !== "form") || noSubmit) {
      e.preventDefault();
      return false;
    }
    onSubmit && onSubmit(formData);
  };

  const onFormChange = debounce(({ formData }: { formData: object }) => {
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
        tagName={Form}
        ref={rjsfRef}
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
