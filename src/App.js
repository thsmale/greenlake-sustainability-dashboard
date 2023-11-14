import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Dashboard from './Dashboard';

function App() {
  return (
		<Grommet theme={hpe} >
      <Dashboard/>
		</Grommet>
  );
}

export default App;
