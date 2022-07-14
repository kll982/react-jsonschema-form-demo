import React, { useEffect, Component } from "react";
import ReactEcharts from "echarts-for-react";
import { data, colors, bgColor, itemStyle } from "@/mock/sunburst-data";

export default class Pie extends Component {
  getOption = () => {
    let option;
    for (let j = 0; j < data.length; ++j) {
      let level1 = data[j].children;
      for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        for (let day = 0; day < block.length; ++day) {
          let style = itemStyle.star1;
          block[day].label = {
            // color: style.color,
            downplay: {
              opacity: 0.5,
            },
          };
          if (block[day]?.children) {
            style = {
              opacity: 1,
              color: style.color,
            };
            block[day].children.forEach(function (book: {
              value: number;
              itemStyle: any;
              label: { color: any };
            }) {
              book.value = 1;
              book.itemStyle = style;
              book.label = {
                color: style.color,
              };
            });
          }
        }
      }
    }
    option = {
      title: { text: "旭日图" },
      backgroundColor: bgColor,
      color: colors,
      series: [
        {
          type: "sunburst",
          center: ["50%", "48%"],
          data: data,
          sort: function (
            a: { depth: number; getValue: () => number; dataIndex: number },
            b: { getValue: () => number; dataIndex: number }
          ) {
            if (a.depth === 1) {
              return b.getValue() - a.getValue();
            } else {
              return a.dataIndex - b.dataIndex;
            }
          },
          label: {
            rotate: "radial",
            color: bgColor,
          },
          itemStyle: {
            borderColor: bgColor,
            borderWidth: 2,
          },
          levels: [
            {},
            {
              r0: 5,
              r: 80,
              label: {
                rotate: 0,
              },
            },
            {
              r0: 80,
              r: 115,
            },
            {
              r0: 135,
              r: 160,
              itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: "transparent",
              },
              label: {
                rotate: "tangential",
                fontSize: 10,
                color: colors[0],
              },
            },
            {
              r0: 160,
              r: 185,
              itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0],
              },
              label: {
                position: "outside",
                textShadowBlur: 5,
                textShadowColor: "#333",
              },
              downplay: {
                label: {
                  opacity: 0.5,
                },
              },
            },
          ],
        },
      ],
    };
    return option;
  };
  render() {
    return <ReactEcharts option={this.getOption()} />;
  }
}
