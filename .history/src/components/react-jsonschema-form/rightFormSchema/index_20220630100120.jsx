import React, { useRef } from "react";
import { Button, Row, Col } from "antd";
import RjsfForm from "@rjsf/antd";

import { schema, uiSchema, testSchema, testUiSchema } from "./utils";
import "../index.less";

function ObjectFieldTemplate(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <Row>{props.properties.map((element) => element.content)}</Row>
    </div>
  );
}

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
        uiSchema={testUiSchema}
        onSubmit={onSubmit}
        onError={onError}
        // ObjectFieldTemplate={ObjectFieldTemplate}
      />
    </div>
  );
};
