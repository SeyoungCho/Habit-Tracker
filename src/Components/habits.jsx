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
  };
  handleOrder = (habit, direction)=>{
    this.props.onOrder(habit, direction);
  }

  render() {
    return (
    <section className="habit-list">
      <ul>
        {
          this.props.habit.map(habit =>
            <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} onDelete={this.handleDelete}
            onOrder={this.handleOrder}/>
          )
        }
      </ul>
      {this.props.count > 0 ? <button className="clear-button" onClick={()=>{
        this.handleClear();
      }}>Clear&nbsp;
        <i class="fas fa-pump-soap"></i>
      </button> : null}
      
    </section>);
  }
}

export default Habits;