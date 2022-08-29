import moment from "moment";
import { differenceArr } from "@/components/charts/utils";

interface WeekDaysProps {
  key: any;
  weekOffDays: number[];
  dayliysData: { name: string; children: number[] }[];
  weekDaysStartAngle?: number; // 默认为90°, +N 顺时针旋转 N°, -N 逆时针旋转 N°
  dayliysStartAngle?: number; // 默认为90°, +N 顺时针旋转 N°, -N 逆时针旋转 N°
}
export const TimeWheelDataUtils = (config: WeekDaysProps) => {
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

  const {
    weekOffDays = [0, 6],
    dayliysData = [],
    dayliysStartAngle = 90,
    weekDaysStartAngle = 90,
  } = config;

  const weekendDay = weekOffDays.map((item: number) => weekday[item]);
  const workday = differenceArr(weekday, weekendDay);

  const dayliys: { name: string; children: any[] }[] = dayliysData.map(
    (item) => {
      return {
        ...item,
        children: item.children.map((it: number) => dayHour[it]),
      };
    }
  );

  const weekDays = [
    {
      name: "Workday",
      children: workday,
    },
    {
      name: "Weekend",
      children: weekendDay,
    },
  ];

  const relationshipArr = [
    weekDays.map((item) =>
      item.children.map((it: { index: number }) => it.index)
    ),
    [],
    dayliys.map((item: { children: { index: number }[] }) =>
      item.children.map((it: { index: number }) => it.index)
    ),
    [],
  ];

  return {
    weekDays,
    dayliys,
    weekDaysStartAngle,
    dayliysStartAngle,
    weekday,
    dayHour,
    relationshipArr,
  };
};
