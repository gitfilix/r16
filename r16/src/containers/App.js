import './App.css';
import React, { Component } from 'react';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass.js';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("App.js inside constructor", props);
        this.state = {
           // single source of truth
           persons: [
             {id: 'as4352', name: 'Sam', age: 65},
             {id: 'as4351', name: 'Bruno', age: 29},
             {id: 'as4335', name: 'Moritz', age: 43},
             {id: 'as435t', name: 'Felixinchen', age: 41}
           ],
           otherState: 'some value here',
           showPersons: false
         }

    }

    // componentWillMount() {
    //     console.log("App.js: componentWillMount" );
    // }

    shouldComponentUpdate( nextProps, nextState) {
        console.log("app.js: shouldComponentUpdate", nextProps, nextState );
        return nextState.persons !== this.state.persons ||
        nextState.showPersons !== this.state.showPersons;
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("App.js: nextProps", nextProps);
    // }

    //New lifecycles introduced 16.3
    // get props, modify them and the state and return a new state obj
    // bring state & props in sync
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(
          "getDerivedStateFromProps: nextProps",
          nextProps,
          prevState);

          return prevState;
    }
    // get a DOM snapshot before render
    getSnapshotBeforeUpdate() {
      console.log("App.js: inside getSnapshotBeforeUpdate");
    }

 // setState be sure to take the actual state due setState is working asynchronously:
 // function with the returned state-objcec
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked +1
      }
    });
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
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      )
    }
    return (
      <WithClass >
      <button onClick={ ()=>{this.setState({showPersons: true})}} >Show Persons</button>
          <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.ShowPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
      </WithClass>
    );
  }
}

export default App;
