import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import { SketchPicker } from "react-color";
import "../../App.less";

const Picker = (props) => {
  const { color, onChange } = props;
  return (
    <div>
      <p>{color}</p>
      <SketchPicker
      // color={color}
      // onChange={onChange}
      />
    </div>
  );
};

const fields = {
  // SchemaField: CustomCheckbox,
};

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
      title: "Title",
      default: "#ff0000",
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
};
export const BaseForm = () => (
  <RjsfForm
    uiSchema={uiSchema}
    schema={schema}
    widgets={widgets}
    // fields={fields}
  />
);
