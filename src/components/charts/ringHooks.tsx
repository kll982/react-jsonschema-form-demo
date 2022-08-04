import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/sunburst";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import { weekDays, dayliys, relationshipArr } from "@/mock/ring-data";
import { defaultPieOption, differenceArr } from "./utils";
import { PieOption } from "./interface";

const weekday: { name: any; value: number }[] = [];
weekDays.map((item: { children: any[] }) => weekday.push(...item.children));

const dayHour: { name: any; value: number }[] = [];
dayliys.map((item: { children: any[] }) => dayHour.push(...item.children));

const RingHooks = () => {
  let myHooksChart: HTMLCanvasElement;
  const ringHooksCharts = useRef(null);
  const [selectedArr, updateSelectedArr] = useState<number[][]>([]);
  const [changeRender, updateChangeRender] = useState<boolean>(true);

  const getOption = () => {
    const { series, backgroundColor } = defaultPieOption;
    const { itemStyle } = series;
    let option = {
      title: { text: "环形图 Hooks  echarts", subtext: "hooks 会陷入死循环" },
      backgroundColor,
      series: [
        {
          type: "pie",
          radius: ["5%", "25%"],
          avoidLabelOverlap: false,
          ...series,
          itemStyle: {
            ...itemStyle,
            color: itemStyle.color(0),
          },
          data: weekDays.map(
            (item: { title: any; name: any; children: object[] }) => ({
              ...item,
              value: item.children.length,
            })
          ),
        },
        {
          type: "pie",
          radius: ["25%", "40%"],
          avoidLabelOverlap: false,
          ...series,
          itemStyle: {
            ...itemStyle,
            color: itemStyle.color(1),
          },
          data: weekday,
        },
        {
          type: "pie",
          radius: ["45%", "60%"],
          avoidLabelOverlap: false,
          ...series,
          itemStyle: {
            ...itemStyle,
            color: itemStyle.color(2),
          },
          startAngle: -15, // 起始角度
          data: dayliys.map(
            (item: { title: any; name: any; children: object[] }) => ({
              ...item,
              value: item.children.length,
            })
          ),
        },
        {
          type: "pie",
          radius: ["60%", "75%"],
          avoidLabelOverlap: false,
          ...series,
          startAngle: -15, // 起始角度
          itemStyle: {
            ...itemStyle,
            color: itemStyle.color(3),
          },
          data: dayHour,
        },
      ],
    };
    return option;
  };

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    myHooksChart = echarts.init(ringHooksCharts.current) as HTMLCanvasElement;
    const option = getOption();
    // 绘制图表
    myHooksChart.setOption(option);

    myHooksChart.on(
      "selectchanged",
      (params: { selected: any; fromActionPayload: any }) => {
        const { selected, fromActionPayload } = params;
        if (changeRender) {
          try {
            updateChangeRender(false);
          } catch (e) {
          } finally {
            // dealSeleced(selected, fromActionPayload);
          }
        }
      }
    );
  }, []);

  const selectFunc = (selectedArr: number[][]) => {
    selectedArr.map((item: number[], index: number) => {
      if (item.length > 0) {
        myHooksChart.dispatchAction({
          type: "select",
          seriesIndex: index,
          dataIndex: item,
        });
      }
    });
    updateSelectedArr(selectedArr);
  };

  const unSelectFunc = (unSelectedArr: number[][]) => {
    let newSelectedArr: number[][] = [[], [], [], []];
    unSelectedArr.map((item: number[], index: number) => {
      if (item.length > 0) {
        newSelectedArr[index] = differenceArr(selectedArr[index], item);
        myHooksChart.dispatchAction({
          type: "unselect",
          seriesIndex: index,
          dataIndex: item,
        });
      }
    });
    updateSelectedArr(newSelectedArr);
  };
  useEffect(() => {
    // updateChangeRender(true);
    console.log("changeRender", changeRender);
  }, [changeRender]);

  useEffect(() => {
    // updateChangeRender(true);
    console.log("change事件 selectedArr", selectedArr);
  }, [selectedArr]);

  const dealSeleced = (
    selected: [
      {
        seriesIndex: number;
        dataIndex: number[];
      }
    ],
    fromActionPayload: any
  ) => {
    const _selectedArr: number[][] = [[], [], [], []];
    const unSelectedArr: number[][] = [[], [], [], []];
    selected.map(({ seriesIndex, dataIndex }) => {
      _selectedArr[seriesIndex] = dataIndex || [];
    });
    // seriesIndex 层级
    // dataIndexInside 索引
    const { type, seriesIndex, dataIndexInside } = fromActionPayload; // select, unselect
    const select = type === "select";
    const activeArr: number[][] = select ? _selectedArr : unSelectedArr;
    switch (seriesIndex) {
      case 0:
      case 2:
        const seriesNextIndexArr =
          relationshipArr[seriesIndex][dataIndexInside] || [];
        activeArr[seriesIndex + 1].push(...seriesNextIndexArr);
        break;
      case 1:
      case 3:
        relationshipArr[seriesIndex - 1].map(
          (item: number[], index: number) => {
            const len = differenceArr(item, activeArr[seriesIndex]).length;
            if ((len === 0 && select) || (len > 0 && !select)) {
              activeArr[seriesIndex - 1].push(index);
            }
            return len;
          }
        );
        // map 数据,取relationshipArr[seriesIndex-1] 与 activeArr[seriesIndex] 差值,如果为空数组, activeArr[seriesIndex-1] push relationshipArr[seriesIndex-1] 的索引
        break;
      default:
        break;
    }

    if (select) {
      selectFunc(activeArr);
    } else if (type === "unselect") {
      unSelectFunc(activeArr);
    }
  };

  return <canvas width={400} height={400} ref={ringHooksCharts} />;
};

export default RingHooks;
