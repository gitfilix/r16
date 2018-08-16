import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    // single source of truth
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

  deletePersonHandler = (personIndex) => {
    //1. slice copies and returned a new array
    //const persons = this.state.persons.slice();

    //2. es6 way: spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
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
