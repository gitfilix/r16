import React, { Component } from 'react';
import PropTypes from 'prop-types'; // extra library
import WithClass from '../../../hoc/WithClass.js'
import './Person.css';
// functional Component - StateFULL



class Person extends Component {
    render () {
        return (
            <WithClass >
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        )
    }
}

//props-types check
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
