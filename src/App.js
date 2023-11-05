import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
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

function App() {
  return (
		<Grommet theme={hpe} >
      <HeaderExample/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
		</Grommet>
  );
}

export default App;
