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
    const habits = this.state.habits.map((item)=>{
      if(item.id===habit.id){
        return {...habit, count:habit.count+1};
      }
      else{
        return item;
      }
    });
    this.setState({habits});
     
  };

  handleDecrement = (habit)=>{
    const habits = this.state.habits.map((item)=>{
      if(item.id===habit.id){
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count};
      }
      else{
        return item;
      }
    });
    this.setState({habits});
     
  };

  handleDelete = (habit)=>{
    const habits = this.state.habits.filter(item=>
      item.id !== habit.id
    );
    this.setState({habits});
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
    const habits = [...this.state.habits, newItem];
    this.setState({habits});
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
    arr = arr.filter((item)=> (item.id!==a.id && item.id!==b.id));
    arr.push(temp_a,temp_b);
    
    arr.sort((x,y)=>x.id-y.id);
    this.setState({habits:arr});
  };
  handleReset = ()=>{
    const habits = this.state.habits.map(item=>{
      if(item.count!==0) {
        return {...item, count:0};
      }
      return item;
    });
    this.setState({habits});
  };
  render() {
    return (
      <div>
        <Navbar count={this.state.habits.filter(item=>item.count>0).length}/>
        <InputForm habit={this.state.habits} onAdd={this.handleAdd}/>
        <Habits key={this.state.habits.id} habit={this.state.habits} onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} onDelete={this.handleDelete}
            onClear={this.handleClear} count={this.state.habits.length}
            onOrder={this.handleOrder}
            onReset={this.handleReset}/>     
      </div>
    );
  }
}

export default App;