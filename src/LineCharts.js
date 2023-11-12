import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Custom Line component
const CustomizedLine = ({ points, dataKey, strokeBefore, strokeAfter }) => {
  const today = new Date();
  return (
    <g>
      {points.map((entry, index, arr) => {
        if (index === 0) return null;
        const prev = arr[index - 1];
        const stroke =
          new Date(entry.payload.date) < today ? strokeBefore : strokeAfter;
        return (
          <line
            key={`line-${index}`}
            x1={prev.x}
            y1={prev.y}
            x2={entry.x}
            y2={entry.y}
            stroke={stroke}
            strokeWidth={2}
          />
        );
      })}
    </g>
  );
};

// Example data
const data = [
  { date: "2023-01-01", value: 10 },
  { date: "2023-01-02", value: 20 },
  // ... more data points ...
];

const MyLineChart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        dot={false}
        activeDot={{ r: 8 }}
        isAnimationActive={false}
        // Using the custom line component
        content={
          <CustomizedLine strokeBefore="#8884d8" strokeAfter="#82ca9d" />
        }
      />
    </LineChart>
  );
};

export default MyLineChart;
