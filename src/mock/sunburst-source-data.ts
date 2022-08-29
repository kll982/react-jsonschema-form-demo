import moment from "moment";

const weekday: { name: string; index: number; value: number }[] = [];
moment.weekdaysShort().forEach((item: string, index: number) => {
  weekday.push({
    name: item,
    index: index,
    value: 1,
  });
});

const dayHour: { name: string; index: number; value: number }[] = [
  ...new Array(24),
].map((_, index) => ({
  name: index === 0 ? "24" : index + "",
  index: index,
  value: 1,
}));

const weekDays = [
  {
    name: "Workday",
    title: "工作日",
    children: weekday.slice(1, 6),
  },
  {
    name: "Weekend",
    title: "休息日",
    children: [weekday[6], weekday[0]],
  },
];

const dayliys1 = [
  {
    name: "Day",
    title: "白天",
    children: dayHour.slice(8, 20),
  },
  {
    name: "Night",
    title: "夜晚",
    children: [...dayHour.slice(20), ...dayHour.slice(0, 8)],
  },
];

const dayliys2 = [
  {
    name: "Before Dawn",
    title: "凌晨",
    children: dayHour.slice(1, 7),
  },
  {
    name: "AM",
    title: "上午",
    children: dayHour.slice(7, 13),
  },
  {
    name: "PM",
    title: "下午",
    children: dayHour.slice(13, 19),
  },
  {
    name: "Evening",
    title: "晚上",
    children: [...dayHour.slice(19), dayHour[0]],
  },
];

export { weekDays, weekday, dayHour, dayliys1 };
