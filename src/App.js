import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './components/Button'

class App extends Component {
  render() {
    const reloadFunction = () => {
      window.location.reload();
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with PWA</h1>
        </header>
        <p className="App-intro">
          ver.3.1.4
        </p>
        <input type="button" value="このページを再読込します" onClick={reloadFunction} />
      </div>
    );
  }
}

export default App;
