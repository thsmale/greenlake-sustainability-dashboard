import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // Label,
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


const CurrentDate = () => {
  return new Date().getDate(); // This gets the current date of the month
};
const halfwayIndex = CurrentDate();
console.log("this is the day of the month");

function generateRandomNumber() {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Scale up the number to be between 0 and 29, then floor it to get an integer,
  // and finally add 1 to make it between 1 and 30
  return Math.floor(randomNumber * 99) + 1;
}

// Example usage
const randomNumber = generateRandomNumber();
console.log(randomNumber);

function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 3;
}

let dataa = [];
for (let i = 0; i < formattedDatesOfCurrentMonth.length; i++) {
    let randomNum = generateRandomNumber();
  let randomEmisson = generateRandomNumber();
  let randomPredictive = generateRandomNumber();
  let pre = i + 1 > halfwayIndex ? randomNum - getRandomNumber() : randomNum 
  let optimizedEmissonVal = i + 1 > halfwayIndex ? randomEmisson - getRandomNumber() : randomEmisson;
  let temp = {
    num: i + 1,
    date: formattedDatesOfCurrentMonth[i],
    value: randomNum,
    compute: randomNum,
    emisson: randomEmisson,
    optimizedEmissons: optimizedEmissonVal,
    predictive: pre,
  };
  dataa.push(temp);
}

console.log("this is data",dataa)
// Custom Line component

const MyLineChart = ({
  toggleChart,
  predictive,
  totalSoFar,
  setTotalSoFar,
  predictedTotalSoFar,
  setPredictedTotalSoFar
}) => {
  let totalVal = 0
  for (let i = 0; i < halfwayIndex; i++){
    console.log(dataa[i].value);
    totalVal += dataa[i].value;
  }
  let predictedTotalVal = 0
  for (let i = 0; i < dataa.length; i++){
    predictedTotalVal += dataa[i].value;
  }
  setPredictedTotalSoFar(predictedTotalVal);
  setTotalSoFar(totalVal);
  console.log("total so far",totalVal)
  return (
    <>
      {toggleChart ? (
        // <ResponsiveContainer >
        <LineChart width={1000} height={400} data={dataa}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDuplicatedCategory={false}
            // tickCount={30}
            height={40}
            dataKey="date"
            // domain={[0, 29]}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            width={80}
            yAxisId="left"
            tick={{ fontSize: 10 }}
            tickCount={5}
          ></YAxis>

          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            yAxisId="left"
            data={dataa}
            dataKey="value"
            strokeWidth={2}
            stroke="#41CDAC"
            // other props
          />
          <Line
            type="monotone"
            yAxisId="left"
            data={dataa.slice(0, halfwayIndex)}
            dataKey="compute"
            stroke="#01A982"
            strokeWidth={4}
            // other props
          />
          {predictive ? (
            <Line
              yAxisId="left"
              type="monotone"
              data={dataa.slice(halfwayIndex - 1, dataa.length)}
              dataKey="predictive"
              stroke="#000"
              strokeWidth={2}
              strokeDasharray="2 2"
              // other props
            />
          ) : (
            <></>
          )}
        </LineChart>
      ) : (
        // </ResponsiveContainer>
        <LineChart width={1000} height={400} data={dataa}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDuplicatedCategory={false}
            // tickCount={30}
            height={40}
            dataKey="date"
            // domain={[0, 29]}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            data={dataa}
            dataKey="emisson"
            strokeWidth={2}
            stroke="#C5722A"
            // other props
          />
          <Line
            type="monotone"
            data={dataa.slice(0, halfwayIndex)}
            dataKey="emisson"
            stroke="#FF7701"
            strokeWidth={4}
            // other props
          />
          {predictive ? (
            <Line
              type="monotone"
              strokeDasharray="2 2"
              data={dataa.slice(halfwayIndex - 1, dataa.length)}
              dataKey="optimizedEmissons"
              stroke="#000"
              strokeWidth={4}
              // other props
            />
          ) : (
            <></>
          )}
        </LineChart>
      )}
    </>
  );
};

export default MyLineChart;
