import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import useToggle from './hooks/useToggle'

function App() {
  const [state, toggle] = useToggle()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello message="Hello World 2">
          <p>Yuyang</p>
        </Hello>
        <h2>{state ? "true" : "false"}</h2>
        <button onClick={toggle}>Toggle</button>
      </header>
    </div>
  );
}

export default App;
