import { ColorPicker, FileUpload } from "../widgets";
import {
  nullSchema,
  integerSchema,
  objectSchema,
  stringSchema,
  stringUiSchema,
  dateSchema,
  dateUiSchema,
  numberSchema,
  numberUiSchema,
  booleanSchema,
  booleanUiSchema,
  arraySchema,
  arrayUiSchema,
} from "../typeSchema";
import { exampleFields, exampleUiFields } from "../typeFields";

const widgets = {
  ColorWidget: ColorPicker,
  FileWidget: FileUpload,
};

const fields = {
  ColorFields: ColorPicker,
  FileFields: FileUpload,
};

const defaultSchema = {
  type: "object",
  properties: {
    // nullSchema,
    exampleFields,
    // stringSchema,
    // dateSchema,
    // numberSchema,
    // integerSchema,
    // booleanSchema,
    // objectSchema,
    // arraySchema,
  },
};

const defaultUiSchema = {
  exampleFields: exampleUiFields,
  stringSchema: stringUiSchema,
  dateSchema: dateUiSchema,
  numberSchema: numberUiSchema,
  booleanSchema: booleanUiSchema,
  arraySchema: arrayUiSchema,
  "ui:submitButtonOptions": {
    props: {
      htmlType: "submit",
    },
  },
};

export {
  widgets as defaultWidgets,
  fields as defaultFields,
  defaultSchema,
  defaultUiSchema,
};
