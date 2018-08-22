//functional component
import React from 'react';
import Aux from '../../hoc/Aux.js';

const cockpit = (props) => {
    return (
        <Aux>
            <h1 className="App-title" >{props.appTitle}</h1>
            <button onClick={props.clicked} className="button">Show them</button>
        </Aux>
    );
};

export default cockpit;
