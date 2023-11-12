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

let dataa = [];
for (let i = 0; i < formattedDatesOfCurrentMonth.length; i++) {
  let randomNum = generateRandomNumber();
  let temp = {
    date: formattedDatesOfCurrentMonth[i],
    value: randomNum,
  };
  dataa.push(temp);
}

console.log(dataa)
// Custom Line component
const CustomLine = (props) => {
  const { points, dataKey, stroke1, stroke2 } = props;
  const halfLength = Math.floor(points.length / 2);

  return (
    <g>
      {points.map((point, index) => {
        if (index === 0) return null; // Skip the first point

        // Determine the color based on the index
        const stroke = index <= halfLength ? stroke1 : stroke2;

        return (
          <line
            key={`line-${index}`}
            stroke={stroke}
            strokeWidth={5}
            fill="#555"
            x1={points[index - 1].x}
            y1={points[index - 1].y}
            x2={point.x}
            y2={point.y}
          />
        );
      })}
    </g>
  );
};


// const CustomizedLine = ({ points, dataKey, strokeBefore, strokeAfter }) => {
//   const today = new Date();
//   return (
//     <g>
//       {points.map((entry, index, arr) => {
//         if (index === 0) return null;
//         const prev = arr[index - 1];
//         const stroke =
//           new Date(entry.payload.date) < today ? strokeBefore : strokeAfter;
//         return (
//           <line
//             key={`line-${index}`}
//             x1={prev.x}
//             y1={prev.y}
//             x2={entry.x}
//             y2={entry.y}
//             stroke={stroke}
//             strokeWidth={2}
//           />
//         );
//       })}
//     </g>
//   );
// };

// Example data
const data = [
  { date: "2023-01-01", value: 10 },
  { date: "2023-01-02", value: 20 },
  // ... more data points ...
];

const halfwayIndex = Math.floor(dataa.length / 2);

// Splitting the data into two halves
const firstHalf = dataa.slice(0, halfwayIndex);
const secondHalf = [{ ...dataa[halfwayIndex - 1] }, ...dataa.slice(halfwayIndex)];

console.log("the first half", firstHalf.length, " the second half", secondHalf.length)

const MyLineChart = () => {
  return (
    <LineChart width={1000} height={300} data={dataa}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line
        type="monotone"
        dataKey="value"
        dot={false}
        activeDot={{ r: 8 }}
        isAnimationActive={false}
        content={<CustomLine stroke1="red" stroke2="green" />}
      /> */}
      {/* Line for the first half */}
      <Line
        type="monotone"
        data={dataa.slice(10, halfwayIndex)}
        dataKey="value"
        stroke="#333"
        // other props
      />

      {/* Line for the second half */}
      <Line
        type="monotone"
        data={dataa.slice(halfwayIndex - 1)}
        // data={secondHalf}
        dataKey="value"
        stroke="red"
        // other props
      />
      {/* <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        dot={false}
        activeDot={{ r: 8 }}
        isAnimationActive={false}
        // Using the custom line component
        content={<CustomLine stroke1="red" stroke2="green" />}
        // content={
        //   <CustomizedLine strokeBefore="#8884d8" strokeAfter="#82ca9d" />
        // }
      /> */}
    </LineChart>
  );
};

export default MyLineChart;
