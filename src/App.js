import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';

class App extends Component {

  constructor() {
    super()
  }

  render() {

    return (
      <div className="App">
        <div className="dashboard">
          <div className="appTitle">
            <h1>The Jungle™ FastRider Service</h1>
          </div>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
