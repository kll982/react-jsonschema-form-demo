import { widgets } from "components/react-jsonschema-form/typeSchema";
import { fields } from "components/react-jsonschema-form/typeFields";

const smartTextSchema = {
  type: "object",
  properties: {
    nodes: {
      title: "Quick search from nodes",
      type: "boolean",
    },
    textarea: {
      type: "string",
    },
  },
};

const field = { ...fields, smartText: smartTextSchema };

const defaultSchema = {
  type: "object",
  properties: {
    color: {
      type: "string",
    },
    file: {
      type: "string",
    },
    textarea: {
      type: "string",
    },
    geo: {
      title: "经纬度",
      type: "object",
    },
    smartText: smartTextSchema,
  },
};

const defaultUiSchema = {
  color: {
    "ui:widget": "color",
  },
  file: {
    "ui:widget": "file",
    "ui:option": { accept: ".png" },
  },
  textarea: {
    "ui:widget": "textarea",
  },
  geo: {
    "ui:field": "geo",
  },
  // smartText: {
  //   "ui:field": "smartText",
  // },
  // smartText: {
  //   // "ui:widget": smartTextSchema,
  //   textarea: {
  //     "ui:widget": "textarea",
  //   },
  // },
};
console.log("field", field);

export {
  widgets as defaultWidgets,
  field as defaultFields,
  defaultSchema,
  defaultUiSchema,
};
