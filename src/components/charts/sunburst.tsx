import React, { useEffect, Component } from "react";
import ReactEcharts from "echarts-for-react";
import { bgColor, colors, weekDays, dayliys } from "@/mock/sunburst-data";
import { itemStyle, label, onionSeries } from "./utils";

export default class Pie extends Component {
  getOption = () => {
    let option;
    option = {
      title: { text: "旭日图 react-echarts" },
      backgroundColor: bgColor,
      color: [...colors, ...colors],
      series: [
        {
          type: "sunburst",
          center: ["50%", "48%"],
          data: weekDays,
          nodeClick: false,
          label: {
            rotate: "radial",
            color: bgColor,
          },
          levels: [
            {},
            {
              r0: 5,
              r: 70,
              label,
              itemStyle: itemStyle(0),
              ...onionSeries,
            },
            {
              r0: 70,
              r: 95,
              label,
              itemStyle: itemStyle(1),
              ...onionSeries,
            },
          ],
        },
        {
          type: "sunburst",
          center: ["50%", "48%"],
          data: dayliys,
          label,
          nodeClick: false,
          levels: [
            {},
            {
              r0: 105,
              r: 140,
              label,
              itemStyle: itemStyle(0),
              ...onionSeries,
            },
            {
              r0: 140,
              r: 165,
              label,
              downplay: {
                label: {
                  opacity: 0.5,
                },
              },
              itemStyle: itemStyle(1),
              ...onionSeries,
            },
          ],
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
  }) => {
    console.log("onChartClick", selected);
  };

  dispatchAction = () => {};

  render() {
    let onEvents = {
      selectchanged: this.onChartSelected.bind(this),
      click: this.onChartClick.bind(this),
      dispatchAction: this.dispatchAction.bind(this),
    };

    return <ReactEcharts option={this.getOption()} onEvents={onEvents} />;
  }
}
