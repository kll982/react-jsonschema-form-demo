import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import ColorPicker from "../colorPick";
import "../../App.less";

// 覆盖原来的 组件
const widgets = {
  ColorWidget: ColorPicker,
};

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    color: {
      type: "string",
      title: "主题色",
      default: { color: "#ff0000" },
    },
  },
};

// 组件的属性
const uiSchema = {
  color: {
    "ui:widget": "color", // could also be "select"
  },
  "ui:submitButtonOptions": {
    props: {
      disabled: false,
      className: "btn btn-info",
    },
    norender: false,
    submitText: "Submit",
  },
};
export const BaseForm = () => (
  <RjsfForm
    uiSchema={uiSchema}
    schema={schema}
    widgets={widgets}
    onSubmit={(e) => console.log("onSubmit", e)}
    // fields={fields}
  />
);
