import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    // single source of truth
    persons: [
      {id: 'as4352', name: 'Sophieli', age: 0.3},
      {id: 'as4351', name: 'Max', age: 29},
      {id: 'as4335', name: 'Moritz', age: 23},
      {id: 'as435t', name: 'Fiiliks', age: 39}
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

  nameChangedHandler = (event, id) => {
    // findIndex: return a function
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })
    // create a new person-object
    const personNew = {
      ...this.state.persons[personIndex]
    };
    // update name at copy
    personNew.name = event.target.value;
    // update the Copy-arry
    const personsArry = [...this.state.persons];

    personsArry[personIndex] = personNew;
    // update the state with the copyArry
    this.setState(
      { persons: personsArry}
    );
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )
    }
    return (
      <div className="App">
          <Cockpit
            showPersons={this.state.ShowPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;
