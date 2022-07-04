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

const definitionsModule = {
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
};

const testSchema = {
  type: "object",
  properties: {
    billing_address: {
      title: "Type",
      type: "string",
      enumNames: ["Person", "Call", "Metting Helper(Geo)"],
      enum: ["Default", "Meeting Helper I"],
      default: "Person",
    },
  },
};
//  {
//   type: "object",
//   anyOf: [
//     {
//       properties: {
//         lorem: {
//           type: "string",
//         },
//       },
//       required: ["lorem"],
//     },
//     {
//       properties: {
//         lorem: {
//           type: "string",
//         },
//         ipsum: {
//           type: "string",
//         },
//       },
//     },
//   ],
// };
// {
//   title: "Person",
//   type: "object",
//   properties: {
//     "Do you have any pets?": {
//       type: "string",
//       enum: ["No", "Yes: One", "Yes: More than one"],
//       default: "No",
//     },
//   },
//   required: ["Do you have any pets?"],
//   dependencies: {
//     "Do you have any pets?": {
//       oneOf: [
//         {
//           properties: {
//             "Do you have any pets?": {
//               enum: ["No"],
//             },
//           },
//         },
//         {
//           properties: {
//             "Do you have any pets?": {
//               enum: ["Yes: One"],
//             },
//             "How old is your pet?": {
//               type: "number",
//             },
//           },
//           required: ["How old is your pet?"],
//         },
//         {
//           properties: {
//             "Do you have any pets?": {
//               enum: ["Yes: More than one"],
//             },
//             "Do you want to get rid of any?": {
//               type: "boolean",
//             },
//           },
//           required: ["Do you want to get rid of any?"],
//         },
//       ],
//     },
//   },
// };
// {
//   // definitions = Field
//   // dependencies 绑定,关联
//   definitions: {
//     address: {
//       type: "object",
//       properties: {
//         street_address: {
//           type: "string",
//         },
//         city: {
//           type: "string",
//         },
//         state: {
//           type: "string",
//         },
//       },
//       required: ["street_address", "city", "state"],
//     },
//     node: {
//       type: "object",
//       properties: {
//         name: {
//           type: "string",
//         },
//         children: {
//           type: "array",
//           items: {
//             $ref: "#/definitions/node",
//           },
//         },
//       },
//     },
//   },
//   type: "object",
//   properties: {
//     billing_address: {
//       title: "Billing address",
//       // $ref: definitionsModule.address,
//       $ref: "#/definitions/address",
//     },
//     // shipping_address: {
//     //   title: "Shipping address",
//     //   $ref: "#/definitions/address",
//     // },
//     tree: {
//       title: "Recursive references",
//       $ref: "#/definitions/node",
//     },
//   },
// };

const testUiSchema = {
  // "ui:order": ["shipping_address", "billing_address", "tree"],
};

export { schema, uiSchema, testSchema, testUiSchema };
