import { TimeWheelDataUtils } from "./index";

const TimeWheelData = {
  en: {
    key: "en",
    weekOffDays: [0, 6],
    dayliysStartAngle: 90 - (360 / 24) * 7, //  +N 顺时针旋转 N°, -N 逆时针旋转 N°
    dayliysData: [
      {
        name: "Day",
        children: Array(12)
          .fill(undefined)
          .map((_, index) => index + 8),
      },
      {
        name: "Night",
        children: [
          ...Array(4)
            .fill(undefined)
            .map((_, index) => index + 20),
          ...Array(8)
            .fill(undefined)
            .map((_, index) => index),
        ],
      },
    ],
  },
  ae: {
    key: "ae",
    weekOffDays: [5, 6],
    dayliysStartAngle: 90,
    weekDaysStartAngle: 90 + 360 / 7,
    dayliysData: [
      {
        name: "Before Dawn",
        children: Array(6)
          .fill(undefined)
          .map((_, index) => index + 1),
      },
      {
        name: "AM",
        children: Array(6)
          .fill(undefined)
          .map((_, index) => index + 7),
      },
      {
        name: "PM",
        children: Array(6)
          .fill(undefined)
          .map((_, index) => index + 13),
      },
      {
        name: "Evening",
        children: [
          ...Array(5)
            .fill(undefined)
            .map((_, index) => index + 19),
          0,
        ],
      },
    ],
  },
};

const dayliysObj = TimeWheelData["en"];
const { weekDays, dayliys, weekday, dayHour, relationshipArr } =
  TimeWheelDataUtils(dayliysObj);

export { dayliys, weekDays, relationshipArr, weekday, dayHour, dayliysObj };
