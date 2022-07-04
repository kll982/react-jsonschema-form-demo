import { Themes } from "../index";

const { IPAThemeVars } = Themes;
const formSchema = () => {
  const schema = {
    title: "theme",
    type: "object",
    required: ["color"],
    properties: {},
  };

  IPAThemeVars.map(
    (key) =>
      (schema.properties[key] = {
        type: "string",
        title: key,
        format: "color",
        default: `var(${key})`,
      })
  );
  return schema;
};

export { schema };
