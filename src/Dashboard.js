// DashboardExample.js
import React, { useContext, useState } from 'react';
import { Box, Button, Nav, ResponsiveContext } from 'grommet';
import DashboardFooter from './DashboardFooter'
import GreenlakeHeader from './Header';
import About from './About';
import Emerald from './Emerald';

const DashboardExample = () => {
  const size = useContext(ResponsiveContext);
  const [view, setView] = useState('emerald')

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
        <Button label="Emerald" onClick={() => setView('emerald')}/>
        <Button label="About" onClick={ () => setView('about') }/>
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
          {
            view === 'emerald' && <Emerald />
          }
          {
            view === 'about' && <About />
          }
        </Box>
        <DashboardFooter />
      </Box>
    </Box>
  );
};

export default DashboardExample;