//functional component
import React from 'react';

const cockpit = (props) => {
    return (
        <div className="Cockpit">
            <h1 className="App-title" >Hi, My new FLX R16 App</h1>

            <button onClick={props.clicked} className="button">Show them</button>
        </div>
    );
};

export default cockpit;
