import React, { Component } from 'react';
import airplaneLogo from './img/airplane-logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import StateContainer from './containers/StateContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={airplaneLogo} className="App-logo" alt="logo" />
          <h2>Welcome to Av-Data</h2>
        </div>
        <p className="App-intro">
          Powered by FlightAware FlightXML 3
        </p>
          <StateContainer />
      </div>
    );
  }
}

export default App;
