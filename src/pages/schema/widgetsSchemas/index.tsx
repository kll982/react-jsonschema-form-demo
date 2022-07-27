import React, { useState, useEffect } from "react";
import { defaultSchema, defaultUiSchema } from "./utils";
import { SchemaForm } from "../index";
import _ from "lodash-contrib";

export const WidgetsForm = () => {
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
