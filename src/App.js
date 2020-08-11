import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Content from './components/Content';

class App extends Component {
  
constructor(){
  super()
}

  render(){
  return (
    <div className="App">
      <Title />
      <Content />
    </div>
  );
  }
}

export default App;
