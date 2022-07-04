import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import "../../App.less";

const fields = {
  // SchemaField: CustomCheckbox,
};

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string",
      title: "Title",
      // default: "A new task",
      format: "color",
      // formData: "color",
    },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const uiSchema = {
  title: {
    classNames: "task-title foo-bar",
  },
};

export const BaseForm = () => (
  <RjsfForm
    uiSchema={uiSchema}
    schema={schema}
    widgets={widgets}
    // fields={fields}
  />
);
