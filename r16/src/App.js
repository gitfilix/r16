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
    ],
    otherState: 'some value here',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
    )
  }

  switchNameHandler = (newName) => {
    // console.log("button was clicked! this:", this);
    this.setState({
      persons: [
        { name: 'Felixli', age: 29},
        { name: newName, age: 0.4},
        { name: 'Määäxli', age: 31},
        { name: 'Mor-its', age: 24}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Felixli', age: 29},
        { name: 'Stramplchen', age: 0.4},
        { name: event.target.value, age: 33},
        { name: 'Mor-its', age: 28}
      ]
    })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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
          changed={this.nameChangedHandler}
          >and my hobby is skating.</Person>
          <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age} />
        </div>
      )
    }
    return (
      <div className="App">
          <h1 className="App-title" >My new FLX R16 App</h1>
          <button onClick={this.togglePersonsHandler} className="button">Show them</button>

          {persons}
      </div>
    );
  }
}

export default App;
