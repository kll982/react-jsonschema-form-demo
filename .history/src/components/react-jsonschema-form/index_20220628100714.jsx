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

const MyCustomWidget = (props) => {
  return (
    <input
      type="text"
      className="custom"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

const myWidgets = {
  myCustomWidget: MyCustomWidget,
};

export const BaseForm = () => (
  <RjsfForm uiSchema={uiSchema} schema={schema} widgets={myWidgets} />
);
