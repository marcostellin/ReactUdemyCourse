import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component {

    constructor (props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
      }


    render () {
        console.log('[Person.js] Inside render()');
        return (
            <>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null }
                </AuthContext.Consumer>
                
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </>   
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);