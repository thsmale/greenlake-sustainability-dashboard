import React from "react";
import { Grommet, Box, Chart, DataChart } from "grommet";
  const data = [
    { date: "2020-08-20", amount: 2 },
    { date: "2020-08-21", amount: 47 },
    { date: "2020-08-22", amount: 33 },
  ];

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
    colors: {
      background: "black", // Set the background color globally
    },
  },
};

// Example data: Replace with your actual server usage data
const serverUsageData = [
  { value: [0, 20] },
  { value: [1, 30] },
  { value: [2, 10] },
  // ... more data points for each day of the month
];

const ServerUsageChart = () => {
  return (
    <Grommet theme={theme}>
      <Box align="center" pad="medium">
        
        
        <DataChart
          data={data}
          series={["date", { property: "amount", prefix: "" }]}
          chart={[
            {
              property: "amount",
              type: "line",
              opacity: "medium",
              thickness: "xsmall",
            //   round,
            },
            {
              property: "amount",
              type: "point",
            //   point: "star",
              thickness: "medium",
            },
          ]}
          guide={{ x: { granularity: "fine" } }}
        />
      </Box>
    </Grommet>
  );
};

export default ServerUsageChart;
