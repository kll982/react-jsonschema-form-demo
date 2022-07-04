import { Themes } from "../index";

const { IPAThemeVars, themes } = Themes;

const curTheme = localStorage.getItem("curTheme");
const new_curTheme = `custom_${curTheme}`;
const formFieldsSchema = () => {
  const schemaObj = {
    title: "Theme Setting",
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string",
        title: "name",
        default: new_curTheme,
      },
    },
  };

  IPAThemeVars.map(
    (key) =>
      (schemaObj.properties[key] = {
        classNames: "ant-col ant-col-6",
        type: "string",
        title: key,
        format: "color",
        default: themes[curTheme][key],
      })
  );
  return schemaObj;
};

const formUiSchema = () => {
  const uiSchemaObj = {
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
    name: {
      classNames: "ant-col ant-col-6",
    },
    "--primary-text-color": {},
  };
  IPAThemeVars.map(
    (key) =>
      (uiSchemaObj[key] = {
        classNames: "ant-col ant-col-6",
      })
  );
  return uiSchemaObj;
};

const schema = formFieldsSchema();
const uiSchema = formUiSchema();

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

export { schema, uiSchema, curTheme };
