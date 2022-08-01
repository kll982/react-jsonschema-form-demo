import { colors, bgColor } from "./sunburst-color";

const dayliys = [
  {
    name: "day",
    title: "白天",
    color: "white",
    children: [
      {
        name: 8,
        index: 0,
        value: 1,
      },
      {
        name: 9,
        index: 1,
        value: 1,
      },
      {
        name: 10,
        index: 2,
        value: 1,
      },
      {
        name: 11,
        index: 3,
        value: 1,
      },
      {
        name: 12,
        index: 4,
        value: 1,
      },
      {
        name: 13,
        index: 5,
        value: 1,
      },
      {
        name: 14,
        index: 6,
        value: 1,
      },
      {
        name: 15,
        index: 7,
        value: 1,
      },
      {
        name: 16,
        index: 8,
        value: 1,
      },
      {
        name: 17,
        index: 9,
        value: 1,
      },
      {
        name: 18,
        index: 10,
        value: 1,
      },
      {
        name: 19,
        index: 11,
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
        index: 12,
        value: 1,
      },
      {
        name: 21,
        index: 13,
        value: 1,
      },
      {
        name: 22,
        index: 14,
        value: 1,
      },
      {
        name: 23,
        index: 15,
        value: 1,
      },
      {
        name: 24,
        index: 16,
        value: 1,
      },
      {
        name: 1,
        index: 17,
        value: 1,
      },
      {
        name: 2,
        index: 18,
        value: 1,
      },
      {
        name: 3,
        index: 19,
        value: 1,
      },
      {
        name: 4,
        index: 20,
        value: 1,
      },
      {
        name: 5,
        index: 21,
        value: 1,
      },
      {
        name: 6,
        index: 22,
        value: 1,
      },
      {
        name: 7,
        index: 23,
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
        index: 0,
        value: 1,
      },
      {
        longName: "Tuesday",
        title: "周二",
        name: "Tue",
        index: 1,
        value: 1,
      },
      {
        longName: "Wednesday",
        title: "周三",
        name: "Wed",
        index: 2,
        value: 1,
      },
      {
        longName: "Thursday",
        title: "周四",
        name: "Thu",
        index: 3,
        value: 1,
      },
      {
        longName: "Friday",
        title: "周五",
        name: "Fri",
        index: 4,
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
        index: 5,
        value: 1,
      },
      {
        longName: "Sunday",
        title: "周日",
        name: "Sun",
        index: 6,
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

const relationshipArr = [
  weekDays.map((item) => item.children.map((it) => it.index)),
  [],
  dayliys.map((item) => item.children.map((it) => it.index)),
  [],
];

export { data, colors, bgColor, dayliys, weekDays, relationshipArr };
