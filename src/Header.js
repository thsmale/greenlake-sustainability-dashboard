
import React, { useContext } from 'react';
import {  Header, Button, Nav, ResponsiveContext } from 'grommet';
import { AppsRounded, HelpOption } from 'grommet-icons';
import GreenlakeLogo from './hpe-greenlake-logo.svg';

const GreenlakeHeader = () => {
    const size = useContext(ResponsiveContext);
    return (
        <Header 
            align="center"
            background="background"
            border={ { color: 'border-weak', side: 'bottom' } }
            justify="between"
            fill="horizontal"
            pad={{
                horizontal: !['xsmall', 'small'].includes(size) ? 'medium' : 'small',
                vertical: 'small'
            }}
        >
            <img alt='HPE Greenlake logo' src={GreenlakeLogo} height="36" width="100"></img>
            <Nav
                align="center"
                direction="row"
                gap="small"
            >
                {!['xsmall', 'small'].includes(size) && (
                    <>
                        <Button icon={<HelpOption size='xlarge'/>} hoverIndicator />
                        <Button icon={<AppsRounded size='xlarge'/>} hoverIndicator />
                    </>
                )}
            </Nav>
        </Header>
    )
} 

export default GreenlakeHeader;