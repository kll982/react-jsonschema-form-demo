import React, { useRef } from "react";
import { Form, Button } from "antd";
import RjsfForm from "@rjsf/antd";
import ColorPicker from "../colorPick";
import "../../App.less";

// 覆盖原来的 组件
const widgets = {
  ColorWidget: ColorPicker,
};
const defaultColor = "var(--primary-color)";
const schema = {
  title: "theme",
  type: "object",
  required: ["color"],
  properties: {
    // color: {
    //   type: "string",
    //   title: "主题色",
    //   format: "color",
    //   default: defaultColor,
    // },
    "--primary-color": {
      type: "string",
      title: "primary",
      format: "color",
      default: defaultColor,
    },
    "--primary-color-hover": {
      type: "string",
      title: "primary",
      format: "color",
      default: defaultColor,
    },
  },
};

// 组件的属性
const uiSchema = {
  color: {
    "ui:widget": "color", // could also be "select"
  },
  // "ui:submitButtonOptions": {
  //   props: {
  //     disabled: false,
  //     className: "btn btn-info",
  //   },
  //   norender: false,
  //   submitText: "提交",
  // },
};
export const BaseForm = () => {
  const formRef = useRef(null);

  const formData = {
    color: "#f5f000",
  };
  return (
    <RjsfForm
      uiSchema={uiSchema}
      schema={schema}
      widgets={widgets}
      // formData={formData}
      onSubmit={(e) => console.log("onSubmit", e)}
      ref={formRef}
      // fields={fields}
    >
      <Button
        type="submit"
        onClick={(e) => {
          console.log("click", formRef.current);
        }}
      >
        保存当前主题配置
      </Button>
    </RjsfForm>
  );
};
