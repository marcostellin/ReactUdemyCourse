import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor (props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  state = {
    persons: [
      {id: 'vxzvzvc', name: 'Max', age: '12'},
      {id: 'dasda', name: 'Juliet', age: '23'},
      {id: 'sdnaksdas', name: 'Tamara', age: '41'}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return  {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }



  render() {

    console.log('[App.js] Inside render()');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} /> 
        </div>
      )
    }

    return (
        <>
          <button onClick={() => {this.setState( {showPersons: true} )}}>Show Persons</button>
          <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler}
          login={this.loginHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>      
        </>
    );
  }
}

export default withClass(App, classes.App);
