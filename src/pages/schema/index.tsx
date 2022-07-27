import React from "react";
import { RenderRjsfForm } from "components";
import { RjsfProps } from "components/react-jsonschema-form/interface";
import "./index.less";

export const SchemaForm = (props: RjsfProps) => {
  const {
    schema = {},
    uiSchema = {},
    onSubmit = (val: object) => void val,
    onChange = (val: object) => void val,
    onError = (val: Array<object>) => void val,
  } = props;

  const onFormSubmit = (formData: object) => {
    onSubmit && onSubmit(formData);
  };
  const onFormChange = (formData: object) => {
    onChange && onChange(formData);
  };

  const onFormError = (errors: Array<object>) => {
    onError && onError(errors);
  };

  return (
    <RenderRjsfForm
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onFormSubmit}
      onError={onFormError}
      onChange={onFormChange}
    ></RenderRjsfForm>
  );
};
