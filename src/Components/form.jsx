import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


class InputForm extends Component {
  state = {
    input:"",
  };
  
  handleInput = (input)=>{  //input을 리스트에 추가하고 텍스트필드 초기화
    if(input!==""){
      this.props.onAdd(input);
      document.getElementById('filled-basic').value="";
      this.setState({input:""});
    }
  };
  handleChange = (e)=>{ //input state 변경
    if(e.target.value.trim() !== ""){
      this.setState({input:e.target.value.trim()});
    }
  }
  
  render() {
    return (
      <div className="input-form">
        <TextField
          sx={{
            width:500,
            maxWidth:'100%',
          }}
          label="Add a new Habit" 
          id="filled-basic"
          onChange={this.handleChange}
          onKeyPress={(e)=>{
            if(e.key==="Enter"){
              this.handleInput(this.state.input);
            }
          }}
          variant="filled"/>
        <Button 
          sx={{
            marginLeft:3, 
            height:63, 
            width:100, 
            fontSize:20, 
            fontFamily: 'Zen Kurenaido'
          }} 
          className="submit-btn" 
          variant="contained"
          onClick={()=>{
            if(this.state.input.length === 0) alert('내용을 입력하세요');
            else{
              this.handleInput(this.state.input);
            }
          }}>
            Add
          </Button>
      </div>
    );
  }
}

export default InputForm;