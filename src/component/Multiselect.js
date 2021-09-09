import React, { Component } from 'react';
import { onFocusChange, onBlur } from './inputAction';
import './select.css';
class Multiselect extends Component{

    constructor(){
        super();
        this.state = {
          value : ''
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
            <select multiple className='sel' style = {{marginTop: "2em"}} value = {this.state.value} onChange = {this.handelInput} onBlur = {onBlur} onFocus = {onFocusChange}>
                <option selected>Select Hobby</option>
                <option value="01">Playing</option>
                <option value="02">Reading</option>
                <option value="03">Drawing</option>
            </select>
        </div>
        );
}
}
export default Multiselect;