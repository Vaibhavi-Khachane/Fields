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
            <select multiple className='sel' style = {{marginTop: "2em"}} onChange = {this.handelInput} onBlur = {onBlur} onFocus = {onFocusChange} required>
                <option selected>Select Hobby</option>
                <option value="Playing">Playing</option>
                <option value="Reading">Reading</option>
                <option value="Drawing">Drawing</option>
            </select>
        </div>
        );
}
}
export default Multiselect;