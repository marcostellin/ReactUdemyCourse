import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'vxzvzvc', name: 'Max', age: '12'},
      {id: 'dasda', name: 'Juliet', age: '23'},
      {id: 'sdnaksdas', name: 'Tamara', age: '41'}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

  render() {

    let persons = null;
    let btnClass = '';



    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map( (person, index) => {
          return (<Person name={person.name} 
                          age={person.age} 
                          key={person.id} 
                          changed={(event) => this.nameChangedHandler(event, person.id)} 
                          click={() => this.deletePersonHandler(index)} />
                 )
        })}
      </div>)

      btnClass = classes.Red;

    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    console.log(classes)

    return (
        <div className={classes.App}>
          <h1>Hello, I'm a React App!</h1>
          <p className={assignedClasses.join(' ')} >This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
