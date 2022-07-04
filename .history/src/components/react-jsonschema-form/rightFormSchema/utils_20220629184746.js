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
      label: false,
      rows: 15,
      // submitButtonOptions: {
      //   norender: false,
      //   submitText: "Submit Btn",
      // },
    },
    firstName: {
      classNames: "ant-col ant-col-6",
    },
    lastName: {
      classNames: "ant-col ant-col-6",
    },
  };
  return uiSchemaObj;
};

const schema = formFieldsSchema();
const uiSchema = formUiSchema();

const testSchema = {
  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      default: "Chuck",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    telephone: {
      type: "string",
      title: "Telephone",
      minLength: 10,
    },
  },
};

export { schema, uiSchema, testSchema };
