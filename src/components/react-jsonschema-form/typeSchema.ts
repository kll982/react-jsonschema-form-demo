import { ColorPicker, FileUpload } from "./widgets";
const widgets = {
  ColorWidget: ColorPicker,
  FileWidget: FileUpload,
};

// Example:
const nullSchema = {
  title: "nullSchema",
  description: "---------- null type schema ----------",
  type: "null",
};

const stringSchema = {
  title: "stringSchema",
  description: "---------- string type schema ----------",
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
    color: {
      type: "string",
    },
    email: {
      type: "string",
    },
    textarea: {
      type: "string",
    },
    file: {
      type: "string",
    },
    file_multiple: {
      type: "string",
    },
    hidden: {
      type: "string",
    },
    password: {
      type: "string",
    },
    url: {
      type: "string",
    },
  },
  required: ["text"],
};

const stringUiSchema = {
  "ui:rootFieldId": "string_Schema",
  text: {
    "ui:widget": "text",
  },
  color: {
    "ui:widget": "color",
  },
  email: {
    "ui:widget": "email",
  },
  textarea: {
    "ui:widget": "textarea",
  },
  file: {
    "ui:widget": "file",
    "ui:option": { accept: ".png" },
  },
  file_multiple: {
    "ui:widget": "file",
    "ui:option": {
      multiple: true,
    },
  },
  hidden: {
    "ui:widget": "hidden",
  },
  password: {
    "ui:widget": "password",
  },
  url: {
    "ui:widget": "uri",
  },
};

const dateSchema = {
  title: "dateSchema",
  description: "---------- date type schema ----------",
  type: "object",
  properties: {
    altDateTime: {
      type: "string",
      hideNowButton: true,
    },
    altDate: {
      type: "string",
      hideClearButton: true,
    },
    dateTime: {
      type: "string",
    },
    date: {
      type: "string",
    },
  },
};

const dateUiSchema = {
  altDateTime: {
    "ui:widget": "alt-datetime",
  },
  altDate: {
    "ui:widget": "alt-date",
  },
  dateTime: {
    "ui:widget": "date-time",
  },
  date: {
    "ui:widget": "date",
  },
};

const numberSchema = {
  title: "numberSchema",
  description: "---------- number type schema ----------",
  type: "object",
  properties: {
    number: {
      label: "number",
      description:
        "---------- number is not supported step, min, max ----------",
      type: "number",
    },
    updown_step: {
      type: "number",
    },
    range: {
      type: "number",
      minimum: 10,
      maximum: 100,
      multipleOf: 5,
    },
  },
};

const numberUiSchema = {
  updown: {
    "ui:widget": "updown",
  },
  range: {
    "ui:widget": "range",
  },
};

const integerSchema = {
  title: "integerSchema",
  description: "---------- integer type schema ----------",
  type: "object",
  properties: {
    integer: {
      label: "integer",
      type: "integer",
    },
  },
};

const booleanSchema = {
  title: "booleanSchema",
  description: "---------- boolean type schema ----------",
  type: "object",
  properties: {
    boolean: {
      label: "boolean",
      type: "boolean",
    },
    boolean_radio: {
      type: "boolean",
    },
    boolean_select: {
      type: "boolean",
    },
  },
};

const booleanUiSchema = {
  boolean_radio: {
    "ui:widget": "radio",
  },
  boolean_select: {
    "ui:widget": "select",
  },
};

const objectSchema = {
  title: "objectSchema",
  description: "---------- object type schema ----------",
  type: "object",
  properties: {},
};

const arraySchema = {
  title: "arraySchema",
  description: "---------- array type schema ----------",
  type: "object",
  properties: {
    array_orderable: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
        },
      },
    },
    array_undelete: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
        },
      },
    },
    array_unorderable: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
        },
      },
    },
    array_select_multiple_choose: {
      type: "array",
      title: "A multiple-choice list",
      items: {
        type: "string",
        enum: ["foo", "bar", "fuzz", "qux"],
      },
      uniqueItems: true,
    },
    array_checkbox_multiple_choose: {
      type: "array",
      title: "A multiple-choice list",
      items: {
        type: "string",
        enum: ["foo", "bar", "fuzz", "qux"],
      },
      uniqueItems: true,
    },
  },
  additionalProperties: {
    type: "number",
    title: "additionalProperties",
    enum: [1, 2, 3],
  },
};

const arrayUiSchema = {
  array_unorderable: {
    "ui:options": {
      orderable: false,
    },
  },
  array_undelete: {
    "ui:options": {
      removable: false,
    },
  },
  array_checkbox_multiple_choose: {
    "ui:widget": "checkboxes",
    "ui:options": {
      inline: true,
    },
  },
};

const alltypeSchema = {
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

const alltypeUiSchema = {
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
  alltypeSchema,
  alltypeUiSchema,
  widgets,
};
