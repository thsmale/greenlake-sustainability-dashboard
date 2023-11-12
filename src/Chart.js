import React, {useState} from "react";
import { Grommet, Box, Chart, DataChart, Text } from "grommet";


function getDatesOfCurrentMonthFormatted() {
  const dates = [];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  let date = new Date(currentYear, currentMonth, 1);

  while (date.getMonth() === currentMonth) {
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = date.toISOString().slice(0, 10);
    dates.push(formattedDate);
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

const formattedDatesOfCurrentMonth = getDatesOfCurrentMonthFormatted();
console.log(formattedDatesOfCurrentMonth);

function generateRandomNumber() {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Scale up the number to be between 0 and 29, then floor it to get an integer,
  // and finally add 1 to make it between 1 and 30
  return Math.floor(randomNumber * 100) + 1;
}

// Example usage
const randomNumber = generateRandomNumber();
console.log(randomNumber);

let dataa = []
for (let i = 0; i < formattedDatesOfCurrentMonth.length; i++) {
    let randomNum = generateRandomNumber()
    let temp = {
      date: formattedDatesOfCurrentMonth[i],
      amount: randomNum
    };
    dataa.push(temp);
}

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
      background: "#333", // Set the background color globally
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

const [hovered, setHovered] = useState(null);
const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

const onMouseOver = (event, value) => {
  setHovered(value);
  setTooltipPos({ top: event.clientY, left: event.clientX });
};

const onMouseOut = () => {
  setHovered(null);
};


  return (
    <Grommet theme={theme}>
      <Box fill align="center" pad="medium">
        <DataChart
          data={dataa}
          series={["date", { property: "amount", prefix: "" }]}
          chart={[
            {
              property: "amount",
              type: "line",
              opacity: "medium",
              thickness: "xsmall",
              point: "circle",

              //   round,
            },

            {
              property: "amount",

              
              type: "point",
            point: "circle",
              thickness: "small",
              onMouseOver: (event) => onMouseOver(event /* data value here */),
              onMouseOut: onMouseOut,
            },
          ]}
          guide={{ x: { granularity: "fine" } }}
        />
        {hovered && (
          <Box
            pad="small"
            background="light-1"
            position="absolute"
            style={{ top: tooltipPos.top, left: tooltipPos.left }}
            round
            elevation="small"
          >
            <Text>{/* Display data for hovered point here */}</Text>
          </Box>
        )}
      </Box>
    </Grommet>
  );
};

export default ServerUsageChart;
