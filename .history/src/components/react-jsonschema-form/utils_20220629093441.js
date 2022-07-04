import { Themes } from "../index";

const { IPAThemeVars } = Themes;

const formSchema = () => {
  const schemaObj = {
    title: "theme Setting",
    type: "object",
    required: ["color"],
    properties: {},
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

export { schema };
