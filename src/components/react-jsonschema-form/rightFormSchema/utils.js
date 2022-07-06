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

const widgets = {
  ColorWidget: ColorPicker,
  FileWidget: FileUpload,
};

const fields = {};

const defaultSchema = {
  type: "object",
  properties: {
    nullSchema,
    stringSchema,
    dateSchema,
    numberSchema,
    integerSchema,
    booleanSchema,
    objectSchema,
    arraySchema,
  },
};

const defaultUiSchema = {
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
