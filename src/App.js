import React from 'react';
import logo from './logo.svg';
import hacktoberfestLogo from './hacktoberfest_2019.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Family Trivia
        </p>
          <img src={hacktoberfestLogo} alt="hacktoberfest"></img>
      </header>
    </div>
  );
}

export default App;
