import React, { Component } from "react";
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
      selectedArr: [],
    };
  }
  async componentDidMount() {
    this.chartSunburst = echarts.init(this.sunburstCharts) as HTMLCanvasElement;
    this.option = this.getOption();
    await this.chartSunburst.setOption(this.option);

    this.chartSunburst.on("selectchanged", (params: any) => {
      const { selected } = params;
      this.dealSeleced(selected);
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

  selectFunc = () => {
    this.chartSunburst.dispatchAction({
      type: "select",
      seriesIndex: [0, 1],
      dataIndex: [1, 5, 6],
    });

    const { selectedArr } = this.state;
    selectedArr.map((item: number[], index: number) => {
      this.chartSunburst.dispatchAction({
        type: "select",
        seriesIndex: index,
        dataIndex: item,
      });
    });
  };

  unSelectFunc = () => {
    const { selectedArr } = this.state;
    console.log("charts selectedArr", selectedArr, this.chartSunburst);
    selectedArr.map((item: number[], index: number) => {
      this.chartSunburst.dispatchAction({
        type: "unselect",
        seriesIndex: index,
        dataIndex: item,
      });
    });
  };

  dealSeleced = (
    selected: [
      {
        seriesIndex: number;
        dataIndex: number[];
      }
    ]
  ) => {
    const selectedArr: number[][] = [[], [], [], []];
    selected.map(({ seriesIndex, dataIndex }) => {
      selectedArr[seriesIndex] = dataIndex || [];
      switch (seriesIndex) {
        case 0:
          if (dataIndex.some((index: number) => index === 0)) {
            selectedArr[seriesIndex + 1].push(0, 1, 2, 3, 4);
          }

          if (dataIndex.some((index: number) => index === 1)) {
            selectedArr[seriesIndex + 1].push(5, 6);
          }
          break;
        default:
          break;
      }
    });
    this.setState({
      selectedArr,
    });
    return selectedArr;
  };

  render() {
    return (
      <div>
        <div
          className="charts"
          ref={(e) => (this.sunburstCharts = e as HTMLElement)}
        />

        <button onClick={this.selectFunc}>select</button>
        <button onClick={this.unSelectFunc}>unselect</button>
      </div>
    );
  }
}
