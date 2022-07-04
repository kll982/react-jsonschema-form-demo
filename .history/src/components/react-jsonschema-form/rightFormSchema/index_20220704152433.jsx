import React, { useRef } from "react";
import { Button, Row, Col } from "antd";
import RjsfForm from "@rjsf/antd";
import { testSchema, testUiSchema, widgets, fields } from "./utils";
import "../index.less";

export const BasicLayoutForm = () => {
  const onSubmit = ({ formData }, e) =>
    console.log("Data submitted: ", formData);

  const onError = (errors) => {
    console.log("errors", errors);
  };

  return (
    <div className={"form"}>
      {/* 默认button type="button" ,需自定义submit button */}
      <RjsfForm
        widgets={widgets}
        schema={testSchema}
        uiSchema={testUiSchema}
        onSubmit={onSubmit}
        onError={onError}
        fields={fields}
        // ObjectFieldTemplate={ObjectFieldTemplate}
      >
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </RjsfForm>
    </div>
  );
};
