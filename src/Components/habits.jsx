import React, { Component } from 'react';
import Habit from './habit';


class Habits extends Component {
  state = {
    habits: [{id : 1, name: 'Reading', count:0},
            {id : 2, name: 'Running', count:0},
            {id : 3, name: 'Coding', count:0},
            ],
  };

  handleIncrement = (habit)=>{
    const target = this.state.habits.find(a => a.id === habit.id);
    const index = this.state.habits.indexOf(target);
    var arr = [...this.state.habits];
    arr[index].count += 1;
    this.setState({habits: arr});   
  };

  handleDecrement = (habit)=>{
    const target = this.state.habits.find(a => a.id === habit.id);
    const index = this.state.habits.indexOf(target);
    var arr = [...this.state.habits];
    arr[index].count === 0 ? arr[index].count = 0 : arr[index].count -= 1;
    this.setState({habits: arr});
  };

  handleDelete = (habit)=>{
    const target = this.state.habits.find(a => a.id === habit.id);
    const index = this.state.habits.indexOf(target);
    var arr = [...this.state.habits];
    arr.splice(index, 1);
    this.setState({habits: arr});
  };

  handleClear = ()=>{
    this.setState({habits: []});
  }
  render() {
    return (
    <>
      <ul>
        {
          this.state.habits.map(habit =>
            <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>
          )
        }
      </ul>
      <button className="clear-button" onClick={()=>{
        this.handleClear();
        const clearBtn = document.querySelector('.clear-button');
        clearBtn.style.display = 'none';
      }}>Clear&nbsp;
        <i class="fas fa-pump-soap"></i>
      </button>
    </>);
  }
}

export default Habits;