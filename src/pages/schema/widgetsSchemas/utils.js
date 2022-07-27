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
};

export { defaultSchema, defaultUiSchema };
