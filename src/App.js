import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Footer,
  Grommet,
  Header,
  Keyboard,
  ResponsiveContext,
  Text,
  TextInput,
} from 'grommet';
import { Search as SearchIcon, Hpe } from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';

const StyledTextInput = styled(TextInput).attrs(() => ({
  'aria-labelledby': 'search-icon-example',
}))``;

export const HeaderExample = () => {
  const size = useContext(ResponsiveContext);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);

  return (
    <Header
      fill='horizontal'
      pad={{ horizontal: 'medium', vertical: 'small' }}
      background='background-font'
    >
      <Button>
        <Box
          direction='row'
          align='start'
          gap='medium'
          // pad maintains accessible hit target
          // non-responsive maintains some dimensions for mobile
          pad={{ vertical: 'small' }}
          responsive={false}
        >
          <Hpe color='brand' />
          {(!['xsmall', 'small'].includes(size) ||
            (['xsmall', 'small'].includes(size) && !focused)) && (
              <Box direction='row' gap='xsmall' wrap>
                <Text color='text-strong' weight='bold'>
                  HPE
                </Text>
                <Text color='text-strong'>Emerald View</Text>
                </Box>
            )}
        </Box>
      </Button>
      <>
        {!focused && ['xsmall', 'small'].includes(size) && (
          <Button
            a11yTitle='Search'
            icon={<SearchIcon />}
            hoverIndicator
            onClick={() => setFocused(true)}
          />
        )}
        {(focused || !['xsmall', 'small'].includes(size)) && (
          <Box background='background-contrast' round='xsmall' width='medium'>
            <Keyboard onEsc={() => setFocused(false)}>
              <StyledTextInput
                ref={inputRef}
                icon={<SearchIcon id='search-icon-example' />}
                dropHeight='small'
                placeholder='Search'
                onBlur={() => setFocused(false)}
                plain
                reverse
              />
            </Keyboard>
          </Box>
        )}
      </>
    </Header>
  )
}

const FooterExample = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'Terms' },
    { label: 'Privacy' },
    { label: 'Security' },
    { label: 'Feedback' }
  ];

  return (
    <Footer
      background='background-front'
      direction={!['xsmall', 'small'].includes(size) ? 'row': 'column'}
      align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
      pad={{ horizontal: 'medium', vertical: 'small' }}
      fill='horizontal'
    >
      <Box
        direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined }
        gap='xsmall'
      >
        <Text size='small'>
          &copy; {year} Hewlett Packard Enterprise Development LP
        </Text>
      </Box>
      <Box
        direction='row'
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap='xsmall'
        wrap
      >
        {footerLinks.map(link => (
          <Button key={link.label} label={link.label} />
        ))}
      </Box>
    </Footer>
  )
}

function App() {
  return (
		<Grommet theme={hpe} >
      <HeaderExample/>
      <p>Dashboard</p>
      <FooterExample/>
		</Grommet>
  );
}

export default App;
