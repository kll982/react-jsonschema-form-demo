import React, { Component } from "react";
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/sunburst";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import { weekDays, dayliys, relationshipArr } from "@/mock/sunburst-data";
import { defaultPieOption } from "./utils";

const weekday: { name: any; value: number }[] = [];
weekDays.map((item: { children: any[] }) => weekday.push(...item.children));

const dayHour: { name: any; value: number }[] = [];
dayliys.map((item: { children: any[] }) => dayHour.push(...item.children));

// 俩个数组的差集,数组1-数组2
const differenceArr = (arr1: any[], arr2: any[]) =>
  arr1.filter((item) => !arr2.includes(item));

export default class Pie extends Component {
  chartSunburst: any;
  option: {
    title?: { text: string };
    backgroundColor?: any;
    series: {
      itemStyle: { color: string; borderColor: any; borderWidth: number };
      startAngle?: number; // 起始角度
      data: any;
      label: { color: string; show: boolean; position: string };
      selectedMode: string;
      selectedOffset: number;
      select: { shadowBlur: number; itemStyle: { color: string } };
      emphasis: { label: { color: string }; scale: boolean };
      type: string;
      radius: string[];
      avoidLabelOverlap: boolean;
    }[];
  };
  sunburstCharts: HTMLDivElement | HTMLCanvasElement;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      changeRender: true,
    };
  }

  async componentDidMount() {
    this.chartSunburst = echarts.init(this.sunburstCharts) as HTMLCanvasElement;
    this.option = this.getOption();
    await this.chartSunburst.setOption(this.option);

    this.chartSunburst.on("selectchanged", (params: any) => {
      const { selected, fromActionPayload } = params;
      const { changeRender } = this.state;
      if (changeRender) {
        this.dealSeleced(selected, fromActionPayload);
      } else {
        console.log("selected", selected);
      }
    });
  }

  getOption = () => {
    const { series, backgroundColor } = defaultPieOption;
    const { itemStyle } = series;
    let option = {
      title: { text: "环形图  echarts" },
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

  selectFunc = (selectedArr: number[][]) => {
    this.setState({ changeRender: false }, () => {
      selectedArr.map((item: number[], index: number) => {
        if (item.length > 0) {
          this.chartSunburst.dispatchAction({
            type: "select",
            seriesIndex: index,
            dataIndex: item,
          });
        }
      });
      this.setState({ changeRender: true });
    });
  };

  unSelectFunc = (unSelectedArr: number[][]) => {
    this.setState({ changeRender: false }, () => {
      unSelectedArr.map((item: number[], index: number) => {
        this.chartSunburst.dispatchAction({
          type: "unselect",
          seriesIndex: index,
          dataIndex: item,
        });
      });
      this.setState({ changeRender: true });
    });
  };

  dealSeleced = (
    selected: [
      {
        seriesIndex: number;
        dataIndex: number[];
      }
    ],
    fromActionPayload: any
  ) => {
    const selectedArr: number[][] = [[], [], [], []];
    const unSelectedArr: number[][] = [[], [], [], []];
    selected.map(({ seriesIndex, dataIndex }) => {
      selectedArr[seriesIndex] = dataIndex || [];
    });
    // seriesIndex 层级
    // dataIndexInside 索引
    const { type, seriesIndex, dataIndexInside } = fromActionPayload; // select, unselect
    const select = type === "select";
    const activeArr: number[][] = select ? selectedArr : unSelectedArr;
    switch (seriesIndex) {
      case 0:
      case 2:
        activeArr[seriesIndex + 1].push(
          ...relationshipArr[seriesIndex][dataIndexInside]
        );
        break;
      case 1:
      case 3:
        relationshipArr[seriesIndex - 1].map((item, index) => {
          const len = differenceArr(item, activeArr[seriesIndex]).length;
          if ((len === 0 && select) || (len > 0 && !select)) {
            activeArr[seriesIndex - 1].push(index);
          }
          return len;
        });
        // map 数据,取relationshipArr[seriesIndex-1] 与 activeArr[seriesIndex] 差值,如果为空数组, activeArr[seriesIndex-1] push relationshipArr[seriesIndex-1] 的索引
        break;
      default:
        break;
    }

    if (select) {
      this.selectFunc(activeArr);
    } else if (type === "unselect") {
      this.unSelectFunc(activeArr);
    }
  };

  render() {
    return (
      <div
        className="charts"
        ref={(e) => (this.sunburstCharts = e as HTMLElement)}
      />
    );
  }
}
