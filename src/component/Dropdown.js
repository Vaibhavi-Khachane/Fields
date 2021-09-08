import React, { Component } from 'react';
import './select.css';
class Dropdown extends Component{

    constructor(){
        super();
        this.state = {
          value : 'Select country'
        }
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
        <div>
            <select className = 'sel' onChange = {this.handelInput} onFocus = {this.onFocusChange} onBlur = {this.onBlur}>
                <option defaultChecked = {this.state.value}>Select country</option>
                <option value="1">India</option>
                <option value="2">USA</option>
                <option value="3">UK</option>
            </select>
        </div>
    );
}
}
export default Dropdown;