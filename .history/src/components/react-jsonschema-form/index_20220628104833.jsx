import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import "../../App.less";
import { Input } from "antd";

const CustomCheckbox = (props) => {
  return (
    <div>
      <p>{props?.title}</p>
      <Input type={"color"} />
      <div>My props are: {JSON.stringify(props.registry.widgets)}</div>
    </div>
  );
};

CustomCheckbox.defaultProps = {
  options: {
    color: "red",
    title: "123",
  },
};

const widgets = {
  CheckboxWidget: CustomCheckbox,
  // CheckboxWidget: CustomCheckbox({ title: "主题色" }),
  // CheckboxWidget: <CustomCheckbox title="主题色" />,
};

const fields = {
  SchemaField: CustomCheckbox,
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
      format: "url",
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
