import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = ()=>{
    this.props.onIncrement(this.props.habit);
  };
 
  handleDecrement = ()=>{
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = ()=>{
    this.props.onDelete(this.props.habit);
  };
  handleOrder = (direction)=>{
    this.props.onOrder(this.props.habit, direction);
  };
  
  render() {
    const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <div className="habit-buttons">
          <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus"></i>
          </button>
          <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus"></i>
          </button>
          <button className="habit-button habit-delete" onClick={this.handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
          <button className="habit-button habit-up" onClick={()=>{const dir = 'up'; this.handleOrder(dir);}}>
            <i className="fas fa-chevron-up"></i>
          </button>
          <button className="habit-button habit-down" onClick={()=>{const dir = 'down'; this.handleOrder(dir)}}>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </li> 
    );
  }
}

export default Habit;