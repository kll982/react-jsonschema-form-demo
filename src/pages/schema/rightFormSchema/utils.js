import {
  nullSchema,
  integerSchema,
  objectSchema,
  stringSchema,
  stringUiSchema,
  dateSchema,
  dateUiSchema,
  numberSchema,
  numberUiSchema,
  booleanSchema,
  booleanUiSchema,
  arraySchema,
  arrayUiSchema,
  widgets,
} from "components/react-jsonschema-form/typeSchema";
import {
  exampleFields,
  exampleUiFields,
  fields,
} from "components/react-jsonschema-form/typeFields";

const defaultSchema = {
  type: "object",
  properties: {
    string: {
      label: "string",
      type: "string",
    },
    textarea: {
      label: "textarea",
      type: "string",
    },
    number: {
      label: "number",
      type: "number",
    },
    checkbox: {
      type: "array",
      minItems: 2,
      title: "A multiple-choice list",
      items: {
        type: "string",
        enum: ["foo", "bar", "fuzz", "qux"],
      },
      uniqueItems: true,
    },
    // nullSchema,
    // exampleFields,
    // stringSchema,
    // dateSchema,
    // numberSchema,
    // integerSchema,
    // booleanSchema,
    // objectSchema,
    // arraySchema,
  },
  // 添加按钮,添加的数据选择范围是 enum 的值
  additionalProperties: {
    type: "number",
    enum: [1, 2, 3],
  },
};

const defaultUiSchema = {
  "ui:options": {
    // expandable: false, // 可以禁用掉 additionalProperties 属性
  },
  textarea: {
    "ui:widget": "textarea",
  },
  checkbox: {
    "ui:widget": "checkboxes",
    "ui:options": {
      inline: true,
    },
  },
  exampleFields: exampleUiFields,
  stringSchema: stringUiSchema,
  dateSchema: dateUiSchema,
  numberSchema: numberUiSchema,
  booleanSchema: booleanUiSchema,
  arraySchema: arrayUiSchema,
  "ui:submitButtonOptions": {
    props: {
      htmlType: "submit",
    },
  },
};

export { defaultSchema, defaultUiSchema };
