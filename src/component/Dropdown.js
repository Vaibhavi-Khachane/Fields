import React, { Component } from 'react';
import './select.css';
import {onBlur, onFocusChange} from './inputAction';
class Dropdown extends Component{

    constructor(){
        super();
        this.state = {
          value : 'Select country'
        }
        this.onFocusChange = onFocusChange;
        this.onBlur = onBlur;
        this.handelInput = this.handelInput.bind(this);
      }
      handelInput(event) {
        this.setState({value: event.target.value});
      }
    
    render(){
    return(
        <div>
            <select className = 'sel' onChange = {this.handelInput} onFocus = {onFocusChange} onBlur = {onBlur} required>
                <option value = {this.state.value}>Select country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
        </div>
    );
}
}
export default Dropdown;