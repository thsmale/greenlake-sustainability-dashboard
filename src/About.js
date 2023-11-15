// CenterInformational.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Layer, Paragraph } from 'grommet';
import { Close } from 'grommet-icons';
import EmeraldArchitecture from './architecture.png';

const About = ({ containerRef }) => {
    // containerRef is for demonstration purposes on this site. Most
    // implementations should likely remove.
    const [showModal, setShowModal] = useState(false);
    return (
        <Box>
            <Button
                label="About"
                onClick={() => setShowModal(true)}
            />
            {showModal && (
                <Layer
                    target={containerRef?.current}
                    onClickOutside={() => setShowModal(false)}
                    onEsc={() => setShowModal(false)}
                    modal={false}
                    full={true}
                >
                    <Box pad="medium">
                        <Box direction="row" align="start" gap="small">
                            <Box gap="medium">
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
                            <Button
                                icon={<Close />}
                                onClick={() => setShowModal(false)}
                                a11yTitle={`You are in a layer containing information about HPE Emerald. To close this layer,
                press Enter.`}
                                autoFocus
                            />
                        </Box>
                    </Box>
                </Layer>
            )}
        </Box>
    );
};

About.propTypes = {
    containerRef: PropTypes.object,
};

export default About;