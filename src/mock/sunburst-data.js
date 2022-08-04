import { colors, bgColor } from "./sunburst-color";
import { weekDays, dayliys1, dayliys2 } from "./sunburst-source-data";

const dayliys = dayliys1;

const deepData = (weekDays = [], dayliys = []) => {
  if (!weekDays) return [];
  return weekDays.map((item, index) => {
    let child = [];
    if (item.children) {
      child = deepData(item.children, dayliys);
    } else {
      child = deepData(dayliys);
    }
    return {
      name: item.name,
      children: child,
    };
  });
};

const data = deepData(weekDays, dayliys);

export { data, colors, bgColor, dayliys, weekDays };
