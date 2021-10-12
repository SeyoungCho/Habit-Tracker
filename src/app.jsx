import './app.css';
import Habits from './Components/habits';
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <Habits />
      </div>
    );
  }
}

export default App;