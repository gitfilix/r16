import React from 'react';

import Person from './Person/Person';

// es6 shorthand on oneliner: no brackets no return statement but its a return statement
const persons = (props) => props.persons.map((person, index) => {
    return <Person
            click={ () => props.clicked(index) }
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id )} />
    }
);

export default persons;
