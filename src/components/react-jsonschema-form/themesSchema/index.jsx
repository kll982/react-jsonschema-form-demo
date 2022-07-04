import React, { useRef } from "react";
import { Button } from "antd";
import { withTheme } from "@rjsf/core";
import { Theme as AntDTheme } from "@rjsf/antd";

import { schema, uiSchema } from "./utils";
import { ColorPicker } from "../widgets";
import "../index.less";

const RjsfForm = withTheme(AntDTheme);

const ThemesForm = () => {
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
      >
        <div>
          <Button
            htmlType="submit"
            style={{
              position: "fixed",
              bottom: "60px",
            }}
          >
            保存当前配置
          </Button>
        </div>
      </RjsfForm>
    </div>
  );
};

export { ThemesForm };
