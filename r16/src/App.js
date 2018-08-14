import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">My new FLX R16 App</h1>
          <Person />
      </div>
    );
  }
}

export default App;
