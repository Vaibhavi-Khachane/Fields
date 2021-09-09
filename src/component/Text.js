import React, { Component } from 'react';
import './field.css';
import {onBlur, onFocusChange} from './inputAction';
class Text extends Component{

    constructor(){
        super();
        this.state = {
          value : ''
        };
        
        this.onBlur = onBlur;
        this.onFocusChange = onFocusChange;
        this.handelInput = this.handelInput.bind(this);
      }
      
      handelInput(event) {
        this.setState({value: event.target.value});
      } 

      
     
      render(){
        return(
        <div className="container">
            <div className="txt">
                <label for= "txt1">Enter text</label>
                <input type = "text" placeholder="Enter text" className="txt1" onFocus = {onFocusChange} onBlur = {onBlur} onChange = {this.handelInput} value = {this.state.value}></input>
            </div>
        </div>
    );
}
}
export default Text;