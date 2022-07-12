import { bgColor, colors } from "@/mock/sunburst-data";

const defaultPieOption = {
  backgroundColor: bgColor,
  series: {
    label: {
      color: "#333",
      show: true,
      position: "inside",
    },
    itemStyle: {
      color: (index: number) =>
        index % 2 === 1 ? "rgba(0,145,255,.3)" : "rgba(0,145,255,.4)",
      borderColor: bgColor,
      borderWidth: 2,
    },
    selectedMode: "multiple",
    selectedOffset: 0,
    select: {
      shadowBlur: 5,
      itemStyle: { color: "#1B4DF0" },
    },
    emphasis: {
      label: {
        color: "#fff",
      },
      // disabled: true,
      scale: false,
      //   focus: "series",
    },
  },
};

const itemStyle = (index: number) => ({
  color: colors[index % 2],
  borderWidth: 2,
});

const label = {
  rotate: 0,
  color: "#333",
};

const onionSeries = {
  emphasis: {
    itemStyle: { color: "#ff0" },
  },
  select: {
    itemStyle: { color: "#1B4DF0" },
  },
  highlightPolicy: "descendant", // 高亮是圆环显示形式
};

export { defaultPieOption, itemStyle, label, onionSeries };
