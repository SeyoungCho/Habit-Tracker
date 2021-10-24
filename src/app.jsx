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
    this.setState({habits: []});
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
  };
  handleOrder = (item, btn)=>{
    if(btn==='up'){
      if(item.id!==1){
        const above = this.state.habits.find(a=>a.id === item.id-1);
        this.swapOrder(item, above);
      }
    }else if(btn==='down'){
      if(item.id!==this.state.habits.length){
        const below = this.state.habits.find(a=>a.id === item.id + 1);
        this.swapOrder(item, below);
      }
    }
  };
  swapOrder = (a, b)=>{
    let temp_a = {...a};
    let temp_b = {...b};
    const temp = temp_a.id;
    temp_a.id = temp_b.id;
    temp_b.id = temp;
    
    let arr = [...this.state.habits];
    if(b===undefined) return;
    arr.filter((item)=> (item.id!==a.id && item.id!==b.id));
    arr.push(temp_a,temp_b);
    arr.sort((x,y)=>x.id-y.id);
    this.setState({habits:arr});
  };
  render() {
    return (
      <div>
        <Navbar count={this.state.habits.filter(item=>item.count>0).length}/>
        <InputForm habit={this.state.habits} onAdd={this.handleAdd}/>
        <Habits key={this.state.habits.id} habit={this.state.habits} onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} onDelete={this.handleDelete}
            onClear={this.handleClear} count={this.state.habits.length}
            onOrder={this.handleOrder}/>
        
      </div>
    );
  }
}

export default App;