import React, { useRef } from "react";
import { Button } from "antd";
import RjsfForm from "@rjsf/antd";

import { schema, uiSchema, testSchema } from "./utils";
import "../index.less";

export const BasicLayoutForm = () => {
  const onSubmit = ({ formData }, e) =>
    console.log("Data submitted: ", formData);

  const onError = (errors) => {
    console.log("errors", errors);
  };

  return (
    <div className={"form"}>
      <RjsfForm
        schema={testSchema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        onError={onError}
        noHtml5Validate
        // layout={"inline"}
        // formContext={{ layout: "inline" }}
      />
    </div>
  );
};
