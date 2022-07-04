import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import ColorPicker from "../colorPick";
import "../../App.less";

const Picker = (props) => {
  const { color, onChange } = props;
  return (
    <ColorPicker
    // color={color}
    // onChange={onChange}
    />
  );
};

const fields = {
  // SchemaField: CustomCheckbox,
};

// 覆盖原来的 组件
const widgets = {
  ColorWidget: Picker,
};

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    color: {
      type: "string",
      title: "主题色",
      default: "#ffff00",
    },
  },
};

const uiSchema = {
  color: {
    // "ui:color": "#ff000", // could also be "select""firstName":
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
