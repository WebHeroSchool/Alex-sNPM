import logo from './logo.svg';
import './App.css';

const flag = 'blue';
const size = 20;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: flag,
          fontSize: size + 30
        }}>
          Alex's homework!
        </p>
        {20+30}
        {true}
        {undefined}
        {null}
        <p>
        {size ? "Size is true" : "Size is false"}
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
    </div>
  );
}

export default App;
