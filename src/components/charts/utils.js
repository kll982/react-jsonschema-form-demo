const bgColor = "white";
const defaultPieOption = {
  backgroundColor: bgColor,
  series: {
    label: {
      color: "#333",
      show: true,
      position: "inside",
    },
    itemStyle: {
      color: (index = 0) =>
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

export { defaultPieOption };
