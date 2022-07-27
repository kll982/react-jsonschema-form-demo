import React from "react";
import { defaultSchema, defaultUiSchema } from "./utils";
import { SchemaForm } from "../index";

export const ThemesForm = () => {
  const onFormSubmit = (formData: object) => {};
  const onFormChange = (formData: object) => {};

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
