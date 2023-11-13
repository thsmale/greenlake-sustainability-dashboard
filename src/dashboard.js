// DashboardExample.js
import React, { useContext, useMemo, useState } from 'react';
import { Box, Button, ResponsiveContext, Text } from 'grommet';
import { defaultUser, GlobalHeader, UserContext } from './global-header';
import DashboardFooter from './DashboardFooter'
import Greeting from './Greeting';
import ServerUsageChart from './Chart';
import MyLineChart from './LineCharts';
import ToggleView from './global-header/components/ToggleView';
import BoxComponent from './global-header/components/BoxComponent';
import OmptimizeContainer from './global-header/components/OmptimizeContainer';
import Modal from './global-header/components/Modal';

const DashboardExample = () => {
  const [user, setUser] = useState(defaultUser);
  const size = useContext(ResponsiveContext);
  const [toggle, togglet] = useState(true);
  const [modal, modalToggle] = useState(false);
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );

  const toggleModalFunc = () => {
    console.log("calling this func")
     modalToggle(!modal);
  }

  return (
    <UserContext.Provider value={contextValue}>
      <Box width={{ max: "xxlarge" }} margin="auto" fill>
        <GlobalHeader />
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
            {user ? (
              <Box gap="large">
                <Greeting />
              </Box>
            ) : (
              <DemoPageContent />
            )}
            {/* <ServerUsageChart /> */}
            <ToggleView toggle={toggle} togglet={togglet} />
            <MyLineChart toggleChart={toggle} />
            <Box direction="row" gap="medium">
              <Box>
                <BoxComponent />
              </Box>
              <OmptimizeContainer
                modal={modal}
                modalToggle={modalToggle}
                func={toggleModalFunc}
              />
              {modal ? <Modal /> : <></>}
            </Box>
          </Box>
          {user && <DashboardFooter />}
        </Box>
      </Box>
    </UserContext.Provider>
  );
};

// This is for demo purposes only. Replace in production with app
// specific content.
const DemoPageContent = () => {
  const { setUser } = useContext(UserContext);
  return (
    <Box align="center" gap="small">
      <Text>This button is for demo purposes only.</Text>
      <Button label="Sign In" primary onClick={() => setUser(defaultUser)} />
    </Box>
  );
};

export default DashboardExample;