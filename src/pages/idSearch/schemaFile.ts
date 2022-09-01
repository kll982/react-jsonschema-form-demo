const idSearchSchema = {
  type: "object",
  properties: {
    string: {
      label: "string",
      type: "string",
    },
    string1: {
      label: "boolean",
      type: "boolean",
    },
    rangeDateTime: {
      label: "rangeDateTime",
      type: "string",
    },
    textArea: {
      label: "textArea",
      type: "string",
    },
    string4: {
      label: "string",
      type: "string",
      colOption: {
        span: 6,
      },
    },
    string5: {
      label: "string",
      type: "string",
      colOption: {
        span: 6,
      },
    },
    string6: {
      label: "string",
      type: "string",
      colOption: {
        span: 6,
      },
    },
    string7: {
      label: "string",
      type: "string",
      colOption: {
        span: 6,
      },
    },
  },
};

const idSearchUiSchema = {
  textArea: {
    "ui:widget": "textarea",
  },
};

export { idSearchSchema, idSearchUiSchema };
