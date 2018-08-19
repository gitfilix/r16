import './App.css';
import React, { Component } from 'react';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("App.js inside constructor", props);
        this.state = {
           // single source of truth
           persons: [
             {id: 'as4352', name: 'Sam', age: 65},
             {id: 'as4351', name: 'Bruno', age: 29},
             {id: 'as4335', name: 'Moritz', age: 33},
             {id: 'as435t', name: 'Felixinchen', age: 41}
           ],
           otherState: 'some value here',
           showPersons: false
         }

    }

    componentWillMount(props) {
        console.log("App.js: componentWillMount" );
    }


    componentDidMount() {
        console.log("App.js: componentDidMount" );
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
      console.log("render triggered");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      )
    }
    return (
      <div className="App">
          <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.ShowPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
      </div>
    );
  }
}

export default App;
