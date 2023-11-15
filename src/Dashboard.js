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
          <ToggleView toggle={toggle} togglet={togglet} />
          <MyLineChart predictive={predictive} toggleChart={toggle} />
          <Box direction="row" gap="medium">
            <Box>
              <BoxComponent />
            </Box>
            <OptimizeContainer
              modal={modal}
              modalToggle={modalToggle}
              func={toggleModalFunc}
              toggleSetOptimized={toggleSetOptimized}
              optimized={optimized}
              setOptimized={setOptimized}
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