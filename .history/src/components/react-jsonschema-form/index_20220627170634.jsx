import React from "react";
import { Form } from "antd";
// import Form from "@rjsf/antd";
// const { default: Form } = JSONSchemaForm;

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

export const BaseForm = () => <Form schema={schema} />;
