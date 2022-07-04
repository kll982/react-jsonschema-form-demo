import { Themes } from "../index";

const { IPAThemeVars } = Themes;

const formSchema = () => {
  const schemaObj = {
    title: "Theme Setting",
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string",
        title: "name",
        // default: `var(${key})`,
      },
      "--primary-text-color": {
        type: "string",
        title: "--primary-text-color",
        format: "color",
        default: `var(--primary-text-color)`,
      },
    },
  };

  // IPAThemeVars.map(
  //   (key) =>
  //     (schemaObj.properties[key] = {
  //       type: "string",
  //       title: key,
  //       format: "color",
  //       default: `var(${key})`,
  //     })
  // );
  return schemaObj;
};
const schema = formSchema();

const uiSchema = {
  options: {
    classNames: "ant-col ant-col-6",
    submitButtonOptions: {
      props: {
        disabled: false,
        className: "btn btn-info",
      },
      norender: false,
      submitText: "Submit",
    },
  },
  // name: {
  //   classNames: "ant-col ant-col-6",
  // },
};

// const testSchema = {
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

export { schema, uiSchema };
