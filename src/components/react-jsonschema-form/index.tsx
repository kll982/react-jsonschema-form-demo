import React, { useState, useEffect } from "react";
import RjsfForm from "@rjsf/antd";
import { RjsfProps } from "components/react-jsonschema-form/interface";
import { defaultWidgets, defaultFields } from "./configuration";

import _ from "lodash-contrib";
import "./index.less";
import { JSONSchema7 } from "json-schema";
import { UiSchema } from "@rjsf/core";
import { CustomField, CustomizeFormProperties } from "./interface";

const RjsfFormComponent: React.FC<any> = RjsfForm as any;

interface RjsfProps {
  // ----------------------------- 常用属性 start --------------------------------
  schema?: JSONSchema7; // 配置
  uiSchema?: UiSchema; // 描述和样式
  widgets?: object; // 自定义默认字段,覆盖原有的组件样式等
  fields?: object; // 自定义组件,拓展新的组件
  className?: string; // form表单的class
  children?: React.ReactNode; // 传入表单的jsx,如 Button 等
  formData?: object; // 表单的值,用来回显数据等
  onSubmit?: (val: object) => void; // 提交的函数
  onError?: (val: Array<object>) => void; // 错误的函数
  onChange?: (val: object) => void; // 表单变化的函数
  // ----------------------------- 常用属性 end --------------------------------
  // ----------------------------- 非常用属性 start --------------------------------
  tagName?: string | React.ReactNode; // 可以将默认form标记名称更改为不同的 HTML 标记，还可以提供类/功能组件
  ObjectFieldTemplate?: (props: CustomizeFormProperties) => JSX.Element; // 表单外部的渲染样式,几行几列
  FieldTemplate?: (props: CustomField) => JSX.Element; // 表单内部的渲染样式,form中的label,content,error信息等
  customFormats?: object; // 自定义格式校验,例如手机号,邮箱等  格式值可以是 AJV 的addFormat方法接受的任何值。
  additionalMetaSchemas?: []; // 允许您针对一个（或多个）JSON Schema 元模式验证表单数据，例如 JSON Schema Draft-04。您可以按如下方式导入元模式：   const metaSchemaDraft04 = require("ajv/lib/refs/json-schema-draft-04.json");
  showErrorList?: boolean; // 当此属性设置为 true 时，ErrorList还会显示错误列表（或 中定义的自定义错误列表）。当设置为 false 时，只会显示内联输入验证错误。默认设置为true。有关详细信息，
  ErrorList?: []; // 错误列表模板
  noHtml5Validate?: boolean; // 关闭 HTML 验证   默认情况下，表单使用 HTML5 验证
  validate?: (formData: object, errors: Array<object>) => void; // 自定义验证规则   注意： - 该validate()函数必须始终返回errors作为第二个参数接收的对象。-在 JSON 模式验证后validate()调用该函数。
  transformErrors?: (errors: Array<object>) => void; // 自定义错误消息   注意： - 该transformErrors()函数必须返回错误列表。在原地修改列表而不返回它会导致错误。
  extraErrors?: object; // 当用户提交表单时，可能会向某个后端发出请求。如果该请求失败，后端返回的错误的格​​式应如下例所示   {"foo":{"__errors":["some error that got added as a prop"]},"candy":{"bar":{"__errors":["some error that got added as a prop"]}}}
  // ----------------------------- 非常用属性 end --------------------------------
}

export const RenderRjsfForm = (props: RjsfProps) => {
  const {
    uiSchema = {},
    className = "",
    children,
    onSubmit,
    onError,
    onChange,
  } = props;

  const [_uiSchema, set_uiSchema] = useState(uiSchema);

  useEffect(() => {
    //  button[type="button"] ,Need to define  button htmlType
    const uiSchema_submitButton = Object.assign(
      {
        norender: false,
        submitText: "submit",
        props: {
          type: "primary",
          htmlType: "submit",
        },
      },
      uiSchema["ui:submitButtonOptions"] || {}
    );
    uiSchema_submitButton["props"]["htmlType"] = "submit";
    set_uiSchema({
      ...uiSchema,
      "ui:submitButtonOptions": uiSchema_submitButton,
    });
  }, [uiSchema]);

  const onFormSubmit = ({ formData }: { formData: object }) => {
    console.log("onFormSubmit", formData);
    onSubmit && onSubmit(formData);
  };
  const onFormChange = _.debounce(({ formData }: { formData: object }) => {
    console.log("onFormChange", formData);
    onChange && onChange(formData);
  }, 500);

  const onFormError = (errors: Array<object>) => {
    console.log("onFormError", errors);
    onError && onError(errors);
  };

  return (
    <div className={`form ${className}`}>
      <RjsfFormComponent
        widgets={defaultWidgets}
        fields={defaultFields}
        schema={{}}
        formData={{}}
        {...props}
        uiSchema={_uiSchema}
        onSubmit={onFormSubmit}
        onError={onFormError}
        onChange={onFormChange}
      >
        {children && children}
      </RjsfFormComponent>
    </div>
  );
};
