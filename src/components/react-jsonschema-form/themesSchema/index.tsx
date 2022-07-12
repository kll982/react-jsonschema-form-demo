import React, { useRef } from "react";
import { Button } from "antd";
// import { withTheme } from "@rjsf/core";
import RjsfForm from "@rjsf/antd";
// import { Theme as AntDTheme } from "@rjsf/antd";

import { schema, uiSchema } from "./utils";
import { ColorPicker } from "../widgets";
import { JSONSchema7 } from "json-schema";
import { UiSchema } from "@rjsf/core";
import "../index.less";

// const RjsfForm = withTheme(AntDTheme);

const RjsfFormComponent: React.FC<any> = RjsfForm as any;

interface RjsfProps {
  schema?: JSONSchema7;
  uiSchema?: UiSchema;
  widgets?: object;
  fields?: object;
  className?: string;
  children?: HTMLElement;
  formData?: object;
  onSubmit?: (val: object) => void;
  onError?: (val: Array<object>) => void;
}

const ThemesForm = (props: RjsfProps) => {
  // 覆盖原来的 组件
  const widgets = {
    ColorWidget: ColorPicker,
  };
  const onSubmit = ({ formData }: { formData: object }) =>
    console.log("Data submitted: ", formData);

  const onError = (errors: Array<object>) => {
    console.log("errors", errors);
  };

  return (
    <div className={"form"}>
      <RjsfFormComponent
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
      </RjsfFormComponent>
    </div>
  );
};

export { ThemesForm };
