import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import "../../App.less";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "color", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const uiSchema = {
  title: {
    classNames: "task-title foo-bar",
  },
};

export const BaseForm = () => <RjsfForm uiSchema={uiSchema} schema={schema} />;
