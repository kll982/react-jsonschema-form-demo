import React, { Component } from "react";
import EChartsReact from "echarts-for-react";
import { weekDays, dayliys } from "@/mock/sunburst-data";
import { defaultPieOption } from "./utils";

const weekday: { name: any; value: number }[] = [];
weekDays.map((item: { children: any[] }) => weekday.push(...item.children));

const dayHour: { name: any; value: number }[] = [];
dayliys.map((item: { children: any[] }) => dayHour.push(...item.children));

export default class Pie extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      selectedArr: [{ dataIndex: [1], seriesIndex: 3 }],
    };
  }
  getOption = () => {
    const { series, backgroundColor } = defaultPieOption;
    const { itemStyle } = series;
    let option = {
      title: { text: "环形图  react-echarts" },
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

  onChartClick = (e: any) => {
    console.log("onChartClick", e);
  };

  onChartSelected = ({
    selected,
  }: {
    selected: Array<{ dataIndex: Array<Number>; seriesIndex: number }>;
  }) => {};

  render() {
    let onEvents = {
      selectchanged: this.onChartSelected.bind(this),
      select: this.onChartClick.bind(this),
    };

    return <EChartsReact option={this.getOption()} onEvents={onEvents} />;
  }
}
