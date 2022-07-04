import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import "../../App.less";
import { Input } from "antd";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const uiSchema = {
  title: {
    classNames: "task-title foo-bar",
  },
};

const CustomCheckbox = function (props) {
  return (
    <div>
      <p>{props?.title}</p>
      <Input type={"color"} />
    </div>
  );
};

const widgets = {
  CheckboxWidget: <CustomCheckbox title="主题色" />,
};

export const BaseForm = () => (
  <RjsfForm uiSchema={uiSchema} schema={schema} widgets={widgets} />
);
