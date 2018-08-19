import React, {Component} from 'react';
import Person from './Person/Person.js';

// now a stateful component
class Persons extends Component {
    constructor (props) {
        super(props);
        console.log("Persons.js constructor", props);
    }
    componentWillMount() {
        console.log("Persons.js: componentWillMount" );
    }

    componentDidMount() {
        console.log("Persons.js: componentDidMount" );
    }

    componentWillReceiveProps(nextProps) {
        console.log("Update Person.js: nextProps", nextProps);
    }
    // gain performance with that check
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }
    render () {
        return this.props.persons.map((person, index) => {
            return <Person
                click={ () => this.props.clicked(index) }
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id )} />
        }   );
    }
}

export default Persons;
