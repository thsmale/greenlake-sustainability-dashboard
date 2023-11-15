import React, { useState } from 'react';
import { Box } from 'grommet';
import Greeting from './Greeting';
import MyLineChart from './LineCharts';
import ToggleView from './toggle/ToggleView';
import BoxComponent from './BoxComponent';
import OptimizeContainer from './OptimizeContainer';

const Emerald = () => {
  const [toggle, togglet] = useState(true);
  const [predictive, predictiveToggle] = useState(false);
  const [optimized, setOptimized] = useState(false);
  const [totalSoFar,setTotalSoFar] = useState(0);
  const [predictedTotalSoFar, setPredictedTotalSoFar] = useState(0)
  const [totalEmissons, setTotalEmissons] = useState(0);
  const [predictedTotalEmissons, setPredictedTotalEmissons] = useState(0)
  const [transform, setTransform] = useState(false);
  const toggleTransformFunc = () => {
    setTransform(!transform);
    console.log("calling the transform func")
  }
  const toggleBtn = () => {
    togglet(!toggle);
  };
  
  
  const togglePredictive = () => {
    console.log("predictive")
    predictiveToggle(!predictive)
  }

  const toggleSetOptimized = () => {
    setOptimized(!optimized)
    if (predictive) {
      togglePredictive()
    }
  }

  //// start data section 
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
  let pre = i + 1 > halfwayIndex ? randomNum - getRandomNumber() : randomNum;
  let optimizedEmissonVal =
    i + 1 > halfwayIndex ? randomEmisson - getRandomNumber() : randomEmisson;
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
    return (
        <Box>
          <Box gap="large">
            <Greeting />
          </Box>
          {/* <ServerUsageChart /> */}
          <ToggleView toggleBtn={toggleBtn} toggle={toggle} togglet={togglet} />
          <MyLineChart
            toggle={toggle}
            totalSoFar={totalSoFar}
            setTotalSoFar={setTotalSoFar}
            predictive={predictive}
            toggleChart={toggle}
            predictedTotalSoFar={predictedTotalSoFar}
            setPredictedTotalSoFar={setPredictedTotalSoFar}
            totalEmissons={totalEmissons}
            setTotalEmissons={setTotalEmissons}
            predictedTotalEmissons={predictedTotalEmissons}
            setPredictedTotalEmissons={setPredictedTotalEmissons}
            transform={transform}
          />
          <Box direction="row" gap="medium">
            <Box>
              <BoxComponent
                toggle={toggle}
                totalSoFar={totalSoFar}
                setTotalSoFar={setTotalSoFar}
                predictedTotalSoFar={predictedTotalSoFar}
                setPredictedTotalSoFar={setPredictedTotalSoFar}
                predictive={predictive}
                totalEmissons={totalEmissons}
                setTotalEmissons={setTotalEmissons}
                predictedTotalEmissons={predictedTotalEmissons}
                setPredictedTotalEmissons={setPredictedTotalEmissons}
              />
            </Box>
            <OptimizeContainer
              func={() => {
                togglePredictive();
                toggleSetOptimized()
              }}
              toggleSetOptimized={toggleSetOptimized}
              optimized={optimized}
              setOptimized={setOptimized}
            toggleTransformFunc={toggleTransformFunc}
            transform={transform}
            />
          </Box>
        </Box>
    );
}

export default Emerald;