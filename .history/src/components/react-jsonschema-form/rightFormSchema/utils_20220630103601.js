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
  // definitions = Field
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

const testUiSchema = {};

export { schema, uiSchema, testSchema, testUiSchema };
