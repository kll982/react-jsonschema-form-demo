import { ColorPicker, FileUpload, Textarea } from "./widgets";
import { GeoPosition, GeoHooksPosition, SmartText } from "./fields";

const fields = {
  color: ColorPicker,
  file: FileUpload,
  textArea: Textarea,
  geo: GeoPosition,
  geoHooks: GeoHooksPosition,
  smartText: SmartText,
};

// Example:
const exampleFields = {
  title: "exampleFields",
  description: "Example fields",
  type: "object",
  properties: {
    color: {
      type: "string",
    },
    file: {
      type: "array",
    },
  },
};

const exampleUiFields = {
  color: {
    "ui:field": "color",
  },
  file: {
    "ui:field": fields.file,
    "ui:option": { accept: ".png" },
  },
};

export { exampleFields, exampleUiFields, fields };
