import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import HeaderExample from './header';
import FooterExample from './footer';

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
