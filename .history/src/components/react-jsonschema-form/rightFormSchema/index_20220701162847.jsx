import React, { useRef } from "react";
import { Button, Row, Col } from "antd";
import RjsfForm from "@rjsf/antd";
import { DateTimePicker } from "../widgets";
import { testSchema, testUiSchema, widgets } from "./utils";
import "../index.less";

console.log("widget", widgets);

export const BasicLayoutForm = () => {
  const onSubmit = ({ formData }, e) =>
    console.log("Data submitted: ", formData);

  const onError = (errors) => {
    console.log("errors", errors);
  };

  return (
    <div className={"form"}>
      <DateTimePicker />
      {/* 默认button type="button" ,需自定义submit button */}
      <RjsfForm
        widgets={widgets}
        schema={testSchema}
        uiSchema={testUiSchema}
        onSubmit={onSubmit}
        onError={onError}
        // ObjectFieldTemplate={ObjectFieldTemplate}
      >
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </RjsfForm>
    </div>
  );
};
