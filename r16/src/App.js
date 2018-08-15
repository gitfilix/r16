import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Fiiliks', age: 39},
      { name: 'Sophieli', age: 0.3},
      { name: 'Max', age: 29},
      { name: 'Moritz', age: 23}
    ]
  }

  switchNameHandler = (newName) => {
    console.log("button was clicked! this:", this);
    this.setState({
      persons: [
        { name: 'Felixli', age: 29},
        { name: newName, age: 0.4},
        { name: 'Määäxli', age: 31},
        { name: 'Mor-its', age: 24}
      ]
    })
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title" >My new FLX R16 App</h1>
          <button onClick={() => this.switchNameHandler('button')}>Switch Name</button>

          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'hallo world')}
            >and my hobby is skating.</Person>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
