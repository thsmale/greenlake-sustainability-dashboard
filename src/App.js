import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

function App() {
  return (
		<Grommet theme={hpe} >
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
