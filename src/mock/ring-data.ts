import {
  weekDays,
  dayliys1,
  dayliys2,
  weekday,
  dayHour,
} from "./sunburst-source-data";

const dayliysArr = [
  {
    data: dayliys1,
    startAngle: -15,
  },
  {
    data: dayliys2,
    startAngle: 90,
  },
];
const dayliysObj = dayliysArr[1];
const dayliys = dayliysObj.data;

const relationshipArr = [
  weekDays.map((item) => item.children.map((it) => it.index)),
  [],
  dayliys.map((item) => item.children.map((it) => it.index)),
  [],
];

export { dayliys, weekDays, relationshipArr, weekday, dayHour, dayliysObj };
