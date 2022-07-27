import React from "react";
import { defaultSchema, defaultUiSchema } from "./utils";
import { SchemaForm } from "../index";
import "../index.less";

export const BasicLayoutForm = () => {
  const onFormSubmit = ({ formData }: { formData: object }) => {};
  const onFormChange = ({ formData }: { formData: object }) => {};

  const onFormError = (errors: Array<object>) => {};

  return (
    <SchemaForm
      schema={defaultSchema}
      uiSchema={defaultUiSchema}
      onSubmit={onFormSubmit}
      onError={onFormError}
      onChange={onFormChange}
    ></SchemaForm>
  );
};
