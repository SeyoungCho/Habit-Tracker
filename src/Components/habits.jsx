import React, { Component } from 'react';
import Habit from './habit';


class Habits extends Component {
  handleIncrement = (habit)=>{
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit)=>{
    this.props.onDecrement(habit);
  };

  handleDelete = (habit)=>{
    this.props.onDelete(habit);
  };

  handleClear = ()=>{
    this.props.onClear();
  }
  render() {
    return (
    <>
      <ul>
        {
          this.props.habit.map(habit =>
            <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>
          )
        }
      </ul>
      <button className="clear-button" onClick={()=>{
        this.handleClear();
       
      }}>Clear&nbsp;
        <i class="fas fa-pump-soap"></i>
      </button>
    </>);
  }
}

export default Habits;