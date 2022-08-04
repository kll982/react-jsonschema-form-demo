import React, { useEffect, Component } from "react";
import { Space, Button } from "antd";
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/sunburst";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import { bgColor, colors, weekDays, dayliys } from "@/mock/sunburst-data";
import { itemStyle, label, onionSeries } from "./utils";
import "./index.less";

// declare let echarts: any; // 要先声明

export default class Pie extends Component {
  option: {
    title?: { text: string };
    backgroundColor?: any;
    color: any[];
    series: {
      type: string;
      center: string[];
      data: any;
      label?: { rotate: number | string; color: string };
      nodeClick?: boolean | string;
      levels: {}[];
    }[];
  };
  chartSunburst: any;
  sunburstCharts: HTMLDivElement | HTMLCanvasElement;

  async componentDidMount() {
    this.chartSunburst = echarts.init(this.sunburstCharts) as HTMLCanvasElement;
    this.option = this.getOption();
    await this.chartSunburst.setOption(this.option);

    await this.chartSunburst.dispatchAction({
      type: "select",
      seriesIndex: 0,
      dataIndexInside: 5,
    });

    this.chartSunburst.on("select", (params: any) => {
      console.log("charts params", params);
    });
  }

  getOption = () => ({
    title: { text: "旭日图 echarts" },
    backgroundColor: bgColor,
    color: [...colors, ...colors],
    series: [
      {
        type: "sunburst",
        center: ["50%", "48%"],
        data: weekDays,
        nodeClick: "link",
        label,
        levels: [
          {},
          {
            r0: 5,
            r: 70,
            itemStyle: itemStyle(0),
            ...onionSeries,
          },
          {
            r0: 70,
            r: 95,
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
        nodeClick: "link",
        levels: [
          {},
          {
            r0: 105,
            r: 140,
            itemStyle: itemStyle(0),
            ...onionSeries,
          },
          {
            r0: 140,
            r: 165,
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
  });

  highlight = () => {
    this.chartSunburst.dispatchAction({
      type: "highlight",
      seriesIndex: [0, 1],
      dataIndexInside: [8, 1],
    });
  };
  downplay = () => {
    this.chartSunburst.dispatchAction({
      type: "downplay",
      seriesIndex: [0],
      dataIndexInside: [8],
    });
  };
  select = () => {
    this.chartSunburst.dispatchAction({
      type: "select",
      seriesIndex: [0, 1],
      dataIndexInside: [8, 1],
    });
  };
  unselect = () => {
    this.chartSunburst.dispatchAction({
      type: "unselect",
      seriesIndex: [0],
      dataIndexInside: [8],
    });
  };

  render() {
    return (
      <div style={{ display: "grid", rowGap: 10 }}>
        <canvas
          width={400}
          height={400}
          ref={(e) => (this.sunburstCharts = e as HTMLElement)}
        />
        <Space>
          <Button onClick={this.highlight}>highlight</Button>
          <Button onClick={this.downplay}>downplay</Button>

          <Button onClick={this.select}>select</Button>
          <Button onClick={this.unselect}>unselect</Button>
        </Space>
      </div>
    );
  }
}
