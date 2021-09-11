import React, { Component } from 'react';
import './field.css';
import {onBlur, onFocusChange} from './inputAction';
class Dates extends Component{
    
    constructor(){
        super();
        this.onBlur = onBlur;
        this.onFocusChange = onFocusChange;
        this.handleDate = this.handleDate.bind(this);
        this.state = {
           date : ''
        }
    }
    handleDate(event){
        this.setState({date:event.target.value});
    }
   
   render(){
    return(
        <div className = "container">
        <div className = "txt">

            <label htmlFor="Dob">Date of Birth</label>
            <input 
            type="date" 
            id="Dob" 
            placeholder="Enter Dob" 
            onChange = {this.handleDate} 
            className = "txt1" 
            onFocus = {onFocusChange} 
            onBlur = {onBlur} required>
            </input>
            
        </div>
        </div>
    );
}
}
export default Dates;