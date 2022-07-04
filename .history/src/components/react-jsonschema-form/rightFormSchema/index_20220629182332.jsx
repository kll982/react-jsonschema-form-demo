import React, { useRef } from "react";
import { Button } from "antd";
import RjsfForm from "@rjsf/antd";
import { Theme as AntDTheme } from "@rjsf/antd";

import { schema, uiSchema } from "./utils";
import ColorPicker from "../../colorPick";
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
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        onError={onError}
        // liveValidate
        // layout={"inline"}
        // formContext={{ layout: "inline" }}
      />
    </div>
  );
};
