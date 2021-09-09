import React, { Component } from 'react';
import './field.css';
import {onBlur, onFocusChange} from './inputAction';
class DatesTime extends Component{

    constructor(){
        super();
        this.onBlur = onBlur;
        this.onFocusChange = onFocusChange;
        this.handleDateTime = this.handleDateTime.bind(this);
        this.state = {
           dateTime : ''
        }
    }
    handleDateTime(event){
        this.setState({dateTime:event.target.value});
    }
    onFocusChange =  (event) => {
        event.target.style.borderColor =   '#0f0'
     }
     
     onBlur = (event) =>{
       event.target.style.borderColor = '#5e7dd4'
     }
    render(){
    return(
        <div className = "container">
            <div className = "txt">
                <label for="datetime">Birthday (date and time):</label>
                <input type="datetime-local" id="datetime" name="datetime" className = "txt1" onChange = {this.handleDateTime} onBlur = {onBlur} onFocus = {onFocusChange}/>
            </div>
        </div>
    );
}
}
export default DatesTime;