import React, { Component } from 'react';
import './field.css';
class Text extends Component{

    constructor(){
        super();
        this.state = {
          value : ''
        };

        this.handelInput = this.handelInput.bind(this);
      }
      
      handelInput(event) {
        this.setState({value: event.target.value});
      } 

      onFocusChange =  (event) => {
         event.target.style.borderColor =   '#0f0'
      }
      
      onBlur = (event) =>{
        event.target.style.borderColor = '#5e7dd4'
      }
     
      render(){
        return(
        <div className="container">
            <div className="txt">
                <label for= "txt1">Enter text</label>
                <input type = "text" placeholder="Enter text" className="txt1" onFocus = { this.onFocusChange} onBlur = {this.onBlur} onChange = {this.handelInput} value = {this.state.value}></input>
            </div>
        </div>
    );
}
}
export default Text;