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
    total_count: 0,
  };
  handleIncrement = (habit)=>{
    const target = this.state.habits.find(a => a.id === habit.id);
    const index = this.state.habits.indexOf(target);
    var arr = [...this.state.habits];
    arr[index].count += 1;
    this.setState({habits: arr});
    this.manageTotal();   
  };

  handleDecrement = (habit)=>{
    const target = this.state.habits.find(a => a.id === habit.id);
    const index = this.state.habits.indexOf(target);
    var arr = [...this.state.habits];
    arr[index].count === 0 ? arr[index].count = 0 : arr[index].count -= 1;
    this.setState({habits: arr});
    this.manageTotal();  
  };

  handleDelete = (habit)=>{
    const target = this.state.habits.find(a => a.id === habit.id);
    const index = this.state.habits.indexOf(target);
    var arr = [...this.state.habits];
    arr.splice(index, 1);
    this.setState({habits: arr});
    this.manageTotal();
  };
  
  handleClear = ()=>{
    this.setState({habits: [], total_count:0});
    
  };
  manageTotal = ()=>{
    var cnt = 0;
    this.state.habits.map(habit=>{
      cnt += habit.count;
    }, []);
    this.setState({total_count:cnt});
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
        <Navbar count={this.state.total_count}/>
        <InputForm habit={this.state.habits} onAdd={this.handleAdd}/>
        <Habits key={this.state.habits.id} habit={this.state.habits} onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} onDelete={this.handleDelete}
            onClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;