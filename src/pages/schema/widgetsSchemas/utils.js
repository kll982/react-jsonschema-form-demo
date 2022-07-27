import { widgets } from "components/react-jsonschema-form/typeSchema";
import { fields } from "components/react-jsonschema-form/typeFields";

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

export {
  widgets as defaultWidgets,
  fields as defaultFields,
  defaultSchema,
  defaultUiSchema,
};
