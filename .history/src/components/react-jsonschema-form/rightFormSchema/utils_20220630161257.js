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
const queries = [
  { id: "1e461fe7-e115-493e-8bb6-8fe4eb89f675", title: "Person" },
  { id: "a8e59741-c919-4011-b21c-fa17131eb0fe", title: "Test App" },
  { id: "5a53ce46-7fe6-47e7-b0b6-10ee6d1b74d4", title: "Meeting Helper" },
  { id: "73f570b2-1f0e-4646-be32-cf9bc4d0154c", title: "Test Complex Object" },
  { id: "f003e960-84b4-11eb-9d1b-3d59b327759d", title: "Call" },
  { id: "query4", title: "Trip Search" },
  {
    id: "45675ac1-a8ac-4547-ae7e-f45667cd1e41",
    title: "Test Complex Object_copy",
  },
  { id: "00f2e51a-c585-4255-afb1-812ae5dfcdc8", title: "Test HTML Object" },
];

const enumName = queries.map((i) => i.title);
const enumValue = queries.map((i) => i.id);

const rangeShow = [...enumValue].slice(3);

const testSchema = {
  type: "object",
  properties: {
    type: {
      title: "Type",
      type: "string",
      enumNames: enumName,
      enum: enumValue,
      default: enumValue[0],
    },
    syncWithSelection: {
      title: "Quick search from nodes",
      type: "boolean",
    },
    teaxarea: {
      type: "string",
    },
  },
  dependencies: {
    type: {
      oneOf: [
        {
          properties: {
            type: {
              enum: rangeShow,
            },
            range: {
              type: "string",
              title: "Range",
              format: "time",
            },
          },
        },
        {
          properties: {
            type: {
              enum: [enumValue[2]],
            },
            range: {
              type: "string",
              title: "Range",
              format: "time",
            },
            range1: {
              type: "string",
              title: "Range",
              format: "time",
            },
          },
        },
      ],
    },
  },
};

const testUiSchema = {
  "ui:order": ["type", "syncWithSelection", "range", "teaxarea", "range1"],
  teaxarea: {
    "ui:widget": "textarea",
    "ui:options": {
      label: false,
    },
  },
  // "ui:order": ["shipping_address", "billing_address", "tree"],
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

export { schema, uiSchema, testSchema, testUiSchema };
