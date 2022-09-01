import { ColorPicker, FileUpload, Textarea } from "./widgets";
import { GeoPosition, GeoHooksPosition, SmartText, TimeWheel, RangeDateTime, RangeDate } from "./fields";

const fields = {
  color: ColorPicker,
  file: FileUpload,
  textArea: Textarea,
  geo: GeoPosition,
  geoHooks: GeoHooksPosition,
  smartText: SmartText,
  timeWheel: TimeWheel,
  rangeDate: RangeDate,
  rangeDateTime: RangeDateTime,
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
