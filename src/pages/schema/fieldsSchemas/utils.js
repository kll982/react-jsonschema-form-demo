const defaultSchema = {
  type: "object",
  properties: {
    // color: {
    //   type: "string",
    // },
    // file: {
    //   type: "string",
    // },
    // textarea: {
    //   type: "string",
    // },
    // geo: {
    //   title: "经纬度",
    //   type: "object",
    // },
    // geoHook: {
    //   title: "经纬度",
    //   type: "object",
    // },
    rangeTime: {
      title: "rangeTime",
      type: "object",
    },
    rangeDate: {
      title: "rangeDate",
      type: "object",
    },
    smartText: {
      title: "smartText",
      type: "object",
    },
    timeWheel: {
      title: "timeWheel",
      type: "array",
    },
  },
};

const defaultUiSchema = {
  // color: {
  //   "ui:field": "color",
  // },
  // file: {
  //   "ui:field": "file",
  //   "ui:option": { accept: ".png" },
  // },
  // textarea: {
  //   "ui:field": "textArea",
  // },
  // geo: {
  //   "ui:field": "geo",
  // },
  // geoHook: {
  //   "ui:field": "geoHooks",
  // },
  rangeTime: {
    "ui:field": "rangeTime",
  },
  rangeDate: {
    "ui:field": "rangeDate",
  },
  smartText: {
    "ui:field": "smartText",
    "ui:option": { prefix: "id" },
  },
  timeWheel: {
    "ui:field": "timeWheel",
  },
  smartTextSchema: {
    textarea: {
      "ui:field": "textArea",
    },
  },
};

export { defaultSchema, defaultUiSchema };
