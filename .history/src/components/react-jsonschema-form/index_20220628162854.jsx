import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import { SketchPicker } from "react-color";
import "../../App.less";

const Picker = (props) => {
  const { color, onChange } = props;
  return <SketchPicker color={color} onChange={onChange} />;
};

const fields = {
  // SchemaField: CustomCheckbox,
};

const widgets = {
  SchemaField: Picker,
};

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    color: {
      type: "string",
      title: "Title",
      default: "#f00f00",
    },
    file: {
      type: "string",
      title: "Title",
    },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const uiSchema = {
  color: {
    "ui:widget": "color", // could also be "select"
  },
  file: {
    "ui:widget": "file", // could also be "select"
  },
  done: {
    // "ui:widget": "radio", // could also be "select"
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
