import React, { Component } from 'react';
import './field.css';
import {onBlur, onFocusChange} from './inputAction';
class Number extends Component {

    constructor(){
        super();
        this.state = {
          value : ''
        }
        this.onBlur = onBlur;
        this.onFocusChange = onFocusChange;
        this.handelInput = this.handelInput.bind(this);
      }
      handelInput(event) {
        this.setState({value: event.target.value});
      }

    

    render(){
    return(
        <div className = "container">
            <div className="txt">
                <label htmlFor= "number">Number</label>
                <input type = "number" placeholder="Enter Number" id="number" className="txt1" onChange = {this.handelInput} value = {this.state.value} onBlur = {onBlur} onFocus = {onFocusChange}></input>
            </div>
        </div>
    );
}
}
export default Number;