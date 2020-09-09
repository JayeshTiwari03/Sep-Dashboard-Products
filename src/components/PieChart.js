import React from "react";
import "hammerjs";

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";

import { pieChartData } from "../data/appData";

/* This function's outputted string determines the label contents */
const labelTemplate = (e) => (e.category + '\n'+ e.value);

export const PieChart = () => (
  <Chart style={{ height: 300 }}>
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={pieChartData}
        categoryField="foodType"
        field="availableInstock"
        padding={0}
      >
        <ChartSeriesLabels
          color="#fff"
          background="none"
          content={labelTemplate}
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);
