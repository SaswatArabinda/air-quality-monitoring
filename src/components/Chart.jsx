import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const Chart = ({ historicalData, selectedCity }) => {
  const chartData = historicalData[selectedCity];
  if (!chartData) return null;

  return (
    <>
      <h3 className="chart-heading">{selectedCity}</h3>

      <LineChart
        width={1000}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="formattedTime" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="aqi" stroke="#8884d8" />
        <Line type="monotone" dataKey="formattedTime" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};

export default Chart;
