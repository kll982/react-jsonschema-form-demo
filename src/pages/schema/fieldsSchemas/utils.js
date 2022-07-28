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
    smartText: {
      title: "smartText",
      type: "object",
    },
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
    "ui:field": "textArea",
  },
  geo: {
    "ui:field": "geo",
  },
  geoHook: {
    "ui:field": "geoHooks",
  },
  smartText: {
    "ui:field": "smartText",
  },
  smartTextSchema: {
    textarea: {
      "ui:field": "textArea",
    },
  },
};

export { defaultSchema, defaultUiSchema };
