// CenterInformational.js
import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import EmeraldArchitecture from './architecture.png';

const About = () => {
    return (
        <Box>
            <Heading margin="none">
                HPE Emerald
            </Heading>
            <Paragraph margin="none">
                This is a dashboard that shows real time CPU usage and carbon footprint.
                It provides suggestions for optimizing cpu and carbon emissions.
            </Paragraph>
            <img
                src={EmeraldArchitecture}
                alt="Emerald deployment architecture"
                height="1000"
                width="1000"
            />
        </Box>
    );
};

export default About;