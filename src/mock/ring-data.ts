import { weekDays, dayliys1, dayliys2 } from "./sunburst-source-data";

const dayliysArr = [
  {
    data: dayliys1,
    startAngleInside: -15,
    startAngleOutside: -15,
  },
  {
    data: dayliys2,
    startAngleInside: 90,
    startAngleOutside: 90,
  },
];
const dayliysObj = dayliysArr[0];
const dayliys = dayliysObj.data;

const relationshipArr = [
  weekDays.map((item) => item.children.map((it) => it.index)),
  [],
  dayliys.map((item) => item.children.map((it) => it.index)),
  [],
];

const weekday: {
  longName?: string;
  title?: string;
  name?: string;
  index?: number;
  value?: number;
}[] = [];

weekDays.map((item) => weekday.push(...item.children));

const dayHour: { name?: number; index?: number; value?: number }[] = [];
dayliys.map((item) => dayHour.push(...item.children));

export { dayliys, weekDays, relationshipArr, weekday, dayHour, dayliysObj };
