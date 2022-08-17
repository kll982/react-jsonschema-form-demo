import {
  stringSchema,
  stringUiSchema,
} from "components/react-jsonschema-form/typeSchema";

const defaultSchema = {
  type: "object",
  properties: {
    pass1: { type: "string", minLength: 3 },
    pass2: { type: "string", minLength: 3 },
  },
  required: ["pass1", "pass2"],
};

const defaultUiSchema = {
  stringSchema: stringUiSchema,
  "ui:submitButtonOptions": {
    norender: false,
    submitText: "validate",
  },
};

export { defaultSchema, defaultUiSchema };
