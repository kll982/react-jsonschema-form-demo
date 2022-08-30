import { weekDays, dayliys1, dayliys2 } from "./sunburst-source-data";

const colors = ["rgba(0,145,255,.4)", "rgba(0,145,255,.3)"];
const bgColor = "#f5f5f5";
const dayliys = dayliys2;

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
