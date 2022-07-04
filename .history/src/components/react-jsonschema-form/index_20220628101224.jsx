import React from "react";
// import { Form } from "antd";
import RjsfForm from "@rjsf/antd";
import "../../App.less";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
    // widgets: { myWidgets },
  },
};

const uiSchema = {
  title: {
    classNames: "task-title foo-bar",
  },
};


const CustomCheckbox = function(props) {
  return (
    <button id="custom" className={props.value ? "checked" : "unchecked"} onClick={() => props.onChange(!props.value)}>
        {String(props.value)}
    </button>
  );
};

const widgets = {
  CheckboxWidget: CustomCheckbox
};

export const BaseForm = () => <RjsfForm uiSchema={uiSchema} schema={schema} widgets=widgets />;
