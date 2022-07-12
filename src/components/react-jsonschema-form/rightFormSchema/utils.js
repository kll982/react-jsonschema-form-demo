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
  widgets,
} from "../typeSchema";
import { exampleFields, exampleUiFields, fields } from "../typeFields";

const defaultSchema = {
  type: "object",
  properties: {
    string: {
      label: "string",
      type: "string",
    },
    text: {
      label: "string",
      type: "string",
    },
    // nullSchema,
    // exampleFields,
    stringSchema,
    dateSchema,
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
