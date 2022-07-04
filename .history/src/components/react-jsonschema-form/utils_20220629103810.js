import { Themes } from "../index";

const { IPAThemeVars } = Themes;

const formSchema = () => {
  const schemaObj = {
    title: "Theme Setting",
    type: "object",
    required: ["color"],
    properties: {
      name: {
        type: "string",
        title: "name",
        // default: `var(${key})`,
      },
    },
  };

  IPAThemeVars.map(
    (key) =>
      (schemaObj.properties[key] = {
        type: "string",
        title: key,
        format: "color",
        default: `var(${key})`,
      })
  );
  return schemaObj;
};
const schema = formSchema();

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

export { schema };
