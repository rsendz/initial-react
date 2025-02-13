import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  }
  const nombre = 'Luis Resendez';
  const elemento = <h1>Hola, {nombre}</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={sum}>add</button>
        <button onClick={minus}>min</button>
        <p>
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
        <p>
          <strong>chavales</strong>
          <br/>
          {elemento}
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
