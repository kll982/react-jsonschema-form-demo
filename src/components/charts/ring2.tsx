import React, { Component } from "react";
import * as echarts from "echarts/lib/echarts";
import "echarts/lib/chart/sunburst";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import {
  weekDays,
  dayliysObj,
  relationshipArr,
  weekday,
  dayHour,
} from "@/mock/ring-data";
import { defaultPieOption, differenceArr } from "./utils";
import { PieOption } from "./interface";
import _ from "lodash";
interface PropsType {
  onChange?: (value: number[][]) => void;
  value?: number[][];
}
interface StateType {
  changeRender: boolean;
  selectedArr: number[][];
}
export default class Pie extends Component {
  props!: PropsType;
  state: StateType;
  chartSunburst: any;
  option!: PieOption;
  sunburstCharts!: HTMLDivElement | HTMLCanvasElement;

  constructor(props: PropsType) {
    super(props);
    this.state = {
      changeRender: true,
      selectedArr: props.value || [[], [], [], []],
    };
  }

  async componentDidMount() {
    this.chartSunburst = echarts.init(this.sunburstCharts) as HTMLCanvasElement;
    this.option = this.getOption();
    await this.chartSunburst.setOption(this.option);
    this.selectFunc(this.state.selectedArr); // 回显数据
    this.chartSunburst.on(
      "selectchanged",
      (params: { selected: any; fromActionPayload: any }) => {
        const { selected, fromActionPayload } = params;
        const { changeRender } = this.state;
        if (changeRender) {
          this.dealSeleced(selected, fromActionPayload);
        }
      }
    );
  }

  componentDidUpdate() {
    if (this.state.changeRender) {
      this.props?.onChange && this.props?.onChange(this.state.selectedArr);
    }
  }

  getOption = () => {
    const { series, backgroundColor } = defaultPieOption;
    const { itemStyle } = series;
    let option = {
      backgroundColor,
      series: [
        {
          type: "pie",
          radius: ["3%", "30%"],
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
          radius: ["30%", "55%"],
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
          radius: ["55%", "75%"],
          avoidLabelOverlap: false,
          ...series,
          itemStyle: {
            ...itemStyle,
            color: itemStyle.color(2),
          },
          startAngle: dayliysObj.startAngleInside, // 起始角度
          data: dayliysObj.data.map(
            (item: { title: any; name: any; children: object[] }) => ({
              ...item,
              value: item.children.length,
            })
          ),
        },
        {
          type: "pie",
          radius: ["75%", "95%"],
          avoidLabelOverlap: false,
          ...series,
          startAngle: dayliysObj.startAngleOutside, // 起始角度
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
      this.setState({ changeRender: true, selectedArr });
    });
  };

  unSelectFunc = (unSelectedArr: number[][]) => {
    const selectedArr: number[][] = this.state.selectedArr;
    let newSelectedArr: number[][] = [[], [], [], []];
    this.setState({ changeRender: false }, () => {
      unSelectedArr.map((item: number[], index: number) => {
        if (item.length > 0) {
          newSelectedArr[index] = differenceArr(selectedArr[index], item);
          this.chartSunburst.dispatchAction({
            type: "unselect",
            seriesIndex: index,
            dataIndex: item,
          });
        } else {
          newSelectedArr[index] = selectedArr[index];
        }
      });
      this.setState({ changeRender: true, selectedArr: newSelectedArr });
    });
  };

  onClearSelect = () => {
    this.unSelectFunc(this.state.selectedArr);
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
    unSelectedArr[seriesIndex].push(dataIndexInside);
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
      this.selectFunc(activeArr);
    } else if (type === "unselect") {
      this.unSelectFunc(activeArr);
    }
  };

  render() {
    return (
      <canvas
        width={400}
        height={400}
        ref={(e) => (this.sunburstCharts = e as HTMLCanvasElement)}
      />
    );
  }
}
