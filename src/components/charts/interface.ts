import { PieSeriesOption, EChartsOption } from "echarts";

export type PieSeries = echarts.ComposeOption<PieSeriesOption>;
export interface PieOption extends EChartsOption {
  //   series: PieSeries[];
}
