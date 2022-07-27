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
    geoHook: {
      title: "经纬度",
      type: "object",
    },
    smartText: smartTextSchema,
  },
};

const defaultUiSchema = {
  color: {
    "ui:field": "color",
  },
  file: {
    "ui:field": "file",
    "ui:option": { accept: ".png" },
  },
  textarea: {
    "ui:field": "textarea",
  },
  geo: {
    "ui:field": "geo",
  },
  geoHook: {
    "ui:field": "geoHooks",
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

export { defaultSchema, defaultUiSchema };
