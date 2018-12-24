import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: '12'},
      {name: 'Juliet', age: '23'},
      {name: 'Tamara', age: '41'}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: '12'},
        {name: 'Juliet', age: '23'},
        {name: 'Tamara', age: '42'}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Maximilian', age: '12'},
        {name: event.target.value, age: '23'},
        {name: 'Tamara', age: '42'}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello, I'm a React App!</h1>
        <button 
          onClick={() => this.switchNameHandler('Maximilian')}
          style={style}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My hobby: racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
