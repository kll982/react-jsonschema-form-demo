import React, { useRef } from "react";
import { Form, Button } from "antd";
import RjsfForm from "@rjsf/antd";
import { schema } from "./utils";
import ColorPicker from "../colorPick";
import "./index.less";

// // 组件的属性 === format
// const uiSchema = {};
// // 赋值
// const formData = {
//   color: "#f5f000",
// };
export const BaseForm = () => {
  const formRef = useRef(null);

  // 覆盖原来的 组件
  const widgets = {
    ColorWidget: ColorPicker,
  };
  return (
    <div className={"form"}>
      <RjsfForm
        schema={schema}
        widgets={widgets}
        // formData={formData}
        onSubmit={(e) => console.log("onSubmit", e)}
        ref={formRef}
      >
        <Button
          type="submit"
          style={{
            position: "fixed",
            bottom: "60px",
            right: "20px",
            zIndex: 9999,
          }}
          onClick={(e) => {
            console.log("click", formRef.current);
          }}
          onSubmit={(e) => console.log("onSubmit---", e)}
        >
          保存当前主题配置
        </Button>
      </RjsfForm>
    </div>
  );
};
