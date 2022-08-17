import React, { useRef } from "react";
import { defaultSchema, defaultUiSchema } from "./utils";
import { SchemaForm } from "../index";
import { Space, Button, Form } from "antd";

export const ValidateForm = () => {
  const [form] = Form.useForm();
  return (
    <SchemaForm
      tagName={Form}
      form={form}
      schema={defaultSchema}
      uiSchema={defaultUiSchema}
      noSubmit
      liveValidate
      validate={(formData: any, errors: any) => {
        if (formData) {
          if (formData.pass1 !== formData.pass2) {
            errors.pass2.addError("Passwords don't match");
          }
        }
        return errors;
      }}
    />
  );
};
