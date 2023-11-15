// DashboardExample.js
import React, { useContext, useState } from 'react';
import { Box, Button, Nav, ResponsiveContext, } from 'grommet';
import DashboardFooter from './DashboardFooter'
import Greeting from './Greeting';
import ServerUsageChart from './Chart';
import MyLineChart from './LineCharts';
import ToggleView from './toggle/ToggleView';
import BoxComponent from './BoxComponent';
import OptimizeContainer from './OptimizeContainer';
import Modal from './modal/Modal';
import GreenlakeHeader from './Header';
import About from './About';

const DashboardExample = () => {
  const size = useContext(ResponsiveContext);
  const [toggle, togglet] = useState(true);
  const [modal, modalToggle] = useState(false);
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

  const toggleModalFunc = () => {
    console.log("calling this func")
    modalToggle(!modal);
   
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
  let randomPredictive = generateRandomNumber();
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



/// Optimize Container Logic
  




//// End Optimize Container Logic   



  return (
    <Box width={{ max: "xxlarge" }} margin="auto" fill>
      <GreenlakeHeader />
      <Nav
        border={{ color: "border-weak", side: "bottom" }}
        direction="row"
        pad={{
          horizontal: !["xsmall", "small"].includes(size) ? "medium" : "small",
          vertical: "small",
        }}
      >
        <Button label="Emerald" />
        <About />
      </Nav>
      <Box overflow="auto">
        <Box
          background="background"
          justify="center"
          pad={{
            horizontal: !["xsmall", "small"].includes(size)
              ? "xlarge"
              : "medium",
            vertical: "large",
          }}
          flex={false}
        >
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
              modal={modal}
              modalToggle={modalToggle}
              func={toggleModalFunc}
              toggleSetOptimized={toggleSetOptimized}
              optimized={optimized}
              setOptimized={setOptimized}
              toggleTransformFunc={toggleTransformFunc}
            />
          </Box>
        </Box>
        <DashboardFooter />
      </Box>
      {modal ? (
        <Modal
          predictive={predictive}
          predictiveToggle={predictiveToggle}
          toggle={toggleModalFunc}
          togglePredictive={togglePredictive}
          modalToggle={modalToggle}
          toggleSetOptimized={toggleSetOptimized}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default DashboardExample;