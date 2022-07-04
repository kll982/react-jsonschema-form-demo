const formFieldsSchema = () => {
  const schemaObj = {
    title: "Form Setting",
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string",
        title: "name",
        // default: `custom_0`,
      },
      name1: {
        type: "string",
        title: "name1",
        // default: `custom_1`,
      },
    },
  };

  return schemaObj;
};

const formUiSchema = () => {
  const uiSchemaObj = {
    options: {
      title: "Title",
      default: "submit",
    },
    name: {
      classNames: "ant-col ant-col-6",
    },
  };
  return uiSchemaObj;
};

const schema = formFieldsSchema();
const uiSchema = formUiSchema();

const testSchema = {
  // 组件 definitions
  definitions: {
    address: {
      type: "object",
      properties: {
        street_address: {
          type: "string",
        },
        city: {
          type: "string",
        },
        state: {
          type: "string",
        },
      },
      required: ["street_address", "city", "state"],
    },
    node: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        children: {
          type: "array",
          items: {
            $ref: "#/definitions/node",
          },
        },
      },
    },
  },
  type: "object",
  properties: {
    billing_address: {
      title: "Billing address",
      $ref: "#/definitions/address",
    },
    // shipping_address: {
    //   title: "Shipping address",
    //   $ref: "#/definitions/address",
    // },
    tree: {
      title: "Recursive references",
      $ref: "#/definitions/node",
    },
  },
};
// {
//   title: "A registration form",
//   description: "A simple form example.",
//   type: "object",
//   required: ["firstName", "lastName"],
//   properties: {
//     firstName: {
//       type: "string",
//       title: "First name",
//       default: "Chuck",
//     },
//     lastName: {
//       type: "string",
//       title: "Last name",
//     },
//     telephone: {
//       type: "string",
//       title: "Telephone",
//       minLength: 10,
//     },

//   },
// };

const testUiSchema = {
  firstName: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "family-name",
  },
  lastName: {
    "ui:emptyValue": "",
    "ui:autocomplete": "given-name",
  },
  age: {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)",
  },
  bio: {
    "ui:widget": "textarea",
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
  },
  date: {
    "ui:widget": "alt-datetime",
  },
  telephone: {
    "ui:options": {
      inputType: "tel",
    },
  },
};

export { schema, uiSchema, testSchema, testUiSchema };
