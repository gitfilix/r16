import React, { Component } from 'react';
import PropTypes from 'prop-types'; // extra library
import WithClass from '../../../hoc/WithClass.js'
import './Person.css';
// functional Component - StateFULL
// inputElement: aditional custom prop for this Class



class Person extends Component {
  componentDidMount () {
    console.log('componentDidMount Person js');
    // use reference
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render () {
        return (
            <WithClass >
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                  ref={(inp) => {this.inputElement = inp}}
                  type="text"
                  onChange={this.props.changed}
                  value={this.props.name}/>
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
