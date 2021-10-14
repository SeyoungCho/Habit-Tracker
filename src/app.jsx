import './app.css';
import Habits from './Components/habits';
import React, { Component } from 'react';
import Navbar from './Components/navbar';
import InputForm from './Components/form';

class App extends Component {
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
    this.setState({habits: [], total_count:0});
    
  };
  handleAdd = (input) =>{
    const newItem = {
      id: this.state.habits.length + 1,
      name: String(input),
      count: 0,
    }
    var arr = [...this.state.habits];
    arr.push(newItem);
    this.setState({habits:arr});
  }
  render() {
    return (
      <div>
        <Navbar count={this.state.habits.filter(item=>item.count>0).length}/>
        <InputForm habit={this.state.habits} onAdd={this.handleAdd}/>
        <Habits key={this.state.habits.id} habit={this.state.habits} onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} onDelete={this.handleDelete}
            onClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;