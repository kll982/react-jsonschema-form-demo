import React, { useRef } from "react";
import { Button } from "antd";
import RjsfForm from "@rjsf/antd";
import { Theme as AntDTheme } from "@rjsf/antd";

import { schema, uiSchema } from "./utils";
import ColorPicker from "../../colorPick";
import "../index.less";

// // 组件的属性 === {format,eg.}
// const uiSchema = {};
// // 赋值
// const formData = {
//   color: "#f5f000",
// };

// Make modifications to the theme with your own fields and widgets

export const BasicLayoutForm = () => {
  const formRef = useRef(null);

  // 覆盖原来的 组件
  const widgets = {
    ColorWidget: ColorPicker,
  };
  const onSubmit = ({ formData }, e) =>
    console.log("Data submitted: ", formData);

  const onError = (errors) => {
    console.log("errors", errors);
  };

  return (
    <div className={"form"}>
      <RjsfForm
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onSubmit={onSubmit}
        onError={onError}
        ref={formRef}
        // layout={"inline"}
        // formContext={{ layout: "inline" }}
      />
    </div>
  );
};
