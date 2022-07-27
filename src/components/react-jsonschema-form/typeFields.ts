import { ColorPicker, FileUpload, Textarea } from "./widgets";
import { GeoPosition, GeoHooksPosition } from "./fields";

const fields = {
  ColorFields: ColorPicker,
  FileFields: FileUpload,
  TextareaFields: Textarea,
  geo: GeoPosition,
  geoHooks: GeoHooksPosition,
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
    "ui:field": fields.ColorFields,
  },
  file: {
    "ui:field": fields.FileFields,
    "ui:option": { accept: ".png" },
  },
};

export { exampleFields, exampleUiFields, fields };
