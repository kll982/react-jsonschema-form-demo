import { colors, bgColor } from "./sunburst-color";

const dayliys = [
  {
    name: "day",
    title: "白天",
    color: "white",
    children: [
      {
        name: 8,
        value: 1,
      },
      {
        name: 9,
        value: 1,
      },
      {
        name: 10,
        value: 1,
      },
      {
        name: 11,
        value: 1,
      },
      {
        name: 12,
        value: 1,
      },
      {
        name: 13,
        value: 1,
      },
      {
        name: 14,
        value: 1,
      },
      {
        name: 15,
        value: 1,
      },
      {
        name: 16,
        value: 1,
      },
      {
        name: 17,
        value: 1,
      },
      {
        name: 18,
        value: 1,
      },
      {
        name: 19,
        value: 1,
      },
    ],
  },
  {
    name: "night",
    title: "夜晚",
    color: "gray",
    children: [
      {
        name: 20,
        value: 1,
      },
      {
        name: 21,
        value: 1,
      },
      {
        name: 22,
        value: 1,
      },
      {
        name: 23,
        value: 1,
      },
      {
        name: 24,
        value: 1,
      },
      {
        name: 1,
        value: 1,
      },
      {
        name: 2,
        value: 1,
      },
      {
        name: 3,
        value: 1,
      },
      {
        name: 4,
        value: 1,
      },
      {
        name: 5,
        value: 1,
      },
      {
        name: 6,
        value: 1,
      },
      {
        name: 7,
        value: 1,
      },
    ],
  },
];

const weekDays = [
  {
    name: "workDay",
    title: "工作日",
    children: [
      {
        longName: "Monday",
        title: "周一",
        name: "Mon",
        value: 1,
      },
      {
        longName: "Tuesday",
        title: "周二",
        name: "Tue",
        value: 1,
      },
      {
        longName: "Wednesday",
        title: "周三",
        name: "Wed",
        value: 1,
      },
      {
        longName: "Thursday",
        title: "周四",
        name: "Thu",
        value: 1,
      },
      {
        longName: "Friday",
        title: "周五",
        name: "Fri",
        value: 1,
      },
    ],
  },
  {
    name: "weekend",
    title: "休息日",
    children: [
      {
        longName: "Saturday",
        title: "周六",
        name: "Sat",
        value: 1,
      },
      {
        longName: "Sunday",
        title: "周日",
        name: "Sun",
        value: 1,
      },
    ],
  },
];

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
