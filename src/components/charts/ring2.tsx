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
      console.log("params", params);
      if (changeRender) {
        this.dealSeleced(selected, fromActionPayload);
      } else {
        setTimeout(() => {
          this.setState({ changeRender: true });
        }, 500);
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

  selectFunc = () => {
    const { selectedArr } = this.state;
    this.setState({ changeRender: false }, () => {
      selectedArr.map((item: number[], index: number) => {
        this.chartSunburst.dispatchAction({
          type: "select",
          seriesIndex: index,
          dataIndex: item,
        });
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

  weekDays = (dataIndex: number[], seriesArr: number[]) => {
    if (dataIndex.some((index: number) => index === 0)) {
      seriesArr.push(0, 1, 2, 3, 4);
    }

    if (dataIndex.some((index: number) => index === 1)) {
      seriesArr.push(5, 6);
    }
    return seriesArr;
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
    const { type } = fromActionPayload; // select, unselect
    selected.map(({ seriesIndex, dataIndex }, index) => {
      selectedArr[seriesIndex] = dataIndex || [];
      switch (seriesIndex) {
        case 0:
          selectedArr[seriesIndex + 1] = this.weekDays(
            dataIndex,
            selectedArr[seriesIndex + 1]
          );
          break;
        default:
          break;
      }
      console.log(seriesIndex, selectedArr[seriesIndex]);
    });
    console.log("charts", selectedArr[1]);
    this.setState(
      {
        selectedArr,
      },
      () => {
        this.selectFunc();
      }
    );
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
