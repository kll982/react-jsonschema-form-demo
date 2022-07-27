import { Themes } from "../../../components/index";

const { IPAThemeVars, themes, getIPAThemes } = Themes;

const formFieldsSchema = () => {
  const curTheme = getIPAThemes();

  const schemaObj = {
    title: "Theme Setting",
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string",
        title: "name",
        default: `custom_${curTheme}`,
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

// 自定义检验
const customFormats = {
  "phone-us": /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
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

export { schema as defaultSchema, uiSchema as defaultUiSchema };
