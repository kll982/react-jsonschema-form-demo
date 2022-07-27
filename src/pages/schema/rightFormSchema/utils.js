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
} from "components/react-jsonschema-form/typeSchema";
import {
  exampleFields,
  exampleUiFields,
  fields,
} from "components/react-jsonschema-form/typeFields";

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

export { defaultSchema, defaultUiSchema };
