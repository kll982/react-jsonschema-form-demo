import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/sunburst";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import { weekDays, dayliys } from "@/mock/sunburst-data";
import { defaultPieOption } from "./utils";

const weekday: { name: any; value: number }[] = [];
weekDays.map((item: { children: any[] }) => weekday.push(...item.children));

const dayHour: { name: any; value: number }[] = [];
dayliys.map((item: { children: any[] }) => dayHour.push(...item.children));

const Pie = () => {
  let myChart: HTMLCanvasElement;
  const sunburstCharts = useRef(null);
  const [selectedArr, updateSelectedArr] = useState<number[][]>([]);

  const getOption = () => {
    const { series, backgroundColor } = defaultPieOption;
    const { itemStyle } = series;
    let option = {
      title: { text: "环形图 Hooks  echarts" },
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
    myChart = echarts.init(sunburstCharts.current) as HTMLCanvasElement;
    const option = getOption();
    // 绘制图表
    myChart.setOption(option);

    myChart.on(
      "select",
      (params: { dataIndexInside: number; seriesIndex: number }) => {
        const { dataIndexInside, seriesIndex } = params;
        console.log("charts select", params);
        dealSelecedItem({ dataIndexInside, seriesIndex });
        // const selectedSunburstCharts = selectedArr;
        // selectedSunburstCharts[seriesIndex] =
        //   selectedSunburstCharts[seriesIndex] || [];
        // selectedSunburstCharts[seriesIndex].push(dataIndexInside);
        // updateSelectedArr(selectedSunburstCharts);
        // console.log("charts select", params, selectedSunburstCharts);
      }
    );
    myChart.on("unselect", (params: any) => {
      const { dataIndexInside, seriesIndex } = params;
      console.log("charts unselect", params);
    });
    // myChart.on("selectchanged", (params: any) => {
    //   const { selected } = params;
    //   console.log("charts selectchanged", params);
    //   // dealSeleced(selected);
    // });
  }, []);

  useEffect(() => {
    if (selectedArr.length) {
      console.log("charts selectedArr", selectedArr);
      selectFunc();
    }
  }, [selectedArr]);

  const dealSelecedItem = ({
    dataIndexInside,
    seriesIndex,
  }: {
    seriesIndex: number;
    dataIndexInside: number;
  }) => {
    const _selectedArr: number[][] = [[], [], [], []];
    _selectedArr.map((item, index) => {
      _selectedArr[index] = selectedArr[index] || [];
      if (seriesIndex === index) {
        _selectedArr[index].push(dataIndexInside);
      }
      switch (seriesIndex) {
        case 0:
          // if (dataIndex.some((index: number) => index === 0)) {
          //   _selectedArr[seriesIndex + 1].push(0, 1, 2, 3, 4);
          // }

          // if (dataIndex.some((index: number) => index === 1)) {
          //   _selectedArr[seriesIndex + 1].push(5, 6);
          // }
          break;
        default:
          break;
      }
    });
    console.log("charts _selectedArr", _selectedArr);
    // updateSelectedArr(_selectedArr);
  };

  const dealSeleced = (
    selected: [
      {
        seriesIndex: number;
        dataIndex: number[];
      }
    ]
  ) => {
    const _selectedArr: number[][] = [[], [], [], []];
    selected.map(({ seriesIndex, dataIndex }) => {
      _selectedArr[seriesIndex] = dataIndex || [];
      switch (seriesIndex) {
        case 0:
          if (dataIndex.some((index: number) => index === 0)) {
            _selectedArr[seriesIndex + 1].push(0, 1, 2, 3, 4);
          }

          if (dataIndex.some((index: number) => index === 1)) {
            _selectedArr[seriesIndex + 1].push(5, 6);
          }
          break;
        default:
          break;
      }
    });
    updateSelectedArr(_selectedArr);
  };

  const selectFunc = () => {
    selectedArr.map((item: number[], index: number) => {
      myChart.dispatchAction({
        type: "select",
        seriesIndex: index,
        dataIndex: item,
      });
    });
  };
  const unSelectFunc = () => {
    selectedArr.map((item: number[], index: number) => {
      myChart.dispatchAction({
        type: "unselect",
        seriesIndex: index,
        dataIndex: item,
      });
    });
    updateSelectedArr([]);
  };

  return (
    <div>
      <div className="charts" ref={sunburstCharts} />

      <button onClick={selectFunc}>select</button>
      <button onClick={unSelectFunc}>unselect</button>
    </div>
  );
};

export default Pie;
