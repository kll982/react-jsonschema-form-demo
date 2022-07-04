import { Themes } from "../index";

const { IPAThemeVars } = Themes;
const schema = {
  title: "theme",
  type: "object",
  required: ["color"],
  properties: {
    // color: {
    //   type: "string",
    //   title: "主题色",
    //   format: "color",
    //   default: defaultColor,
    // },
    "--primary-color": {
      type: "string",
      title: "primary",
      format: "color",
      default: defaultColor,
    },
    "--primary-color-hover": {
      type: "string",
      title: "primary-hover",
      format: "color",
      default: defaultColor,
    },
  },
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

export default schema;
