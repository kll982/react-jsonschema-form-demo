import React, { useRef } from "react";
import { Button } from "antd";
// import RjsfForm from "@rjsf/antd";
import { withTheme } from "@rjsf/core";
import { Theme as AntDTheme } from "@rjsf/antd";

import { schema } from "./utils";
import ColorPicker from "../colorPick";
import "./index.less";

// // 组件的属性 === format
// const uiSchema = {};
// // 赋值
// const formData = {
//   color: "#f5f000",
// };

// Make modifications to the theme with your own fields and widgets

const RjsfForm = withTheme(AntDTheme);

export const BaseForm = () => {
  const formRef = useRef(null);
  let yourForm = null;

  // 覆盖原来的 组件
  const widgets = {
    ColorWidget: ColorPicker,
  };
  const onSubmit = ({ formData }, e) =>
    console.log("Data submitted: ", formData);

  const onError = (errors) =>
    console.log("I have", errors.length, "errors to fix");

  return (
    <div className={"form"}>
      <RjsfForm
        schema={schema}
        widgets={widgets}
        // formData={formData}
        onSubmit={onSubmit}
        onError={onError}
        ref={formRef}
      >
        <div>
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </RjsfForm>
      <Button
        style={{
          position: "fixed",
          bottom: "60px",
        }}
        onClick={(e) => {
          formRef.current.onSubmit(e);
        }}
      >
        保存当前主题配置
      </Button>
    </div>
  );
};
