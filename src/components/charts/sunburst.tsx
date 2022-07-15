import React, { useEffect, Component } from "react";
import ReactEcharts from "echarts-for-react";
import { bgColor, colors, weekDays, dayliys } from "@/mock/sunburst-data";

const label = {
  rotate: 0,
  color: "#333",
};
const itemStyle = (index: number) => ({
  color: colors[index % 2],
  borderColor: bgColor,
  borderWidth: 2,
});

const onionSeries = {
  emphasis: {
    itemStyle: { color: "#1B4DF0" },
  },
};

export default class Pie extends Component {
  getOption = () => {
    let option;
    option = {
      title: { text: "旭日图" },
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
              r: 80,
              label,
              itemStyle: itemStyle(0),
              ...onionSeries,
            },
            {
              r0: 80,
              r: 115,
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
              r0: 125,
              r: 160,
              label,
              itemStyle: itemStyle(0),
              ...onionSeries,
            },
            {
              r0: 160,
              r: 185,
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
