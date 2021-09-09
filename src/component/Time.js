import React, { Component } from 'react';
import './field.css'
import {onBlur, onFocusChange} from './inputAction';
class Time extends Component{
    constructor(){
        super();

        this.handelTime = this.handelTime.bind(this);
        this.onFocusChange = onFocusChange;
        this.onBlur = onBlur;
        
        this.state = {
           time : ''
        }
    }
    handelTime(event){
        this.setState({time:event.target.value});
    }
    
    
    render(){
    return(
        <div className = "container" style={{marginLeft:"1em"}}>
            <div className = "txt">

                <label for="time">Select a time:</label>
                <input 
                type="time" 
                id="time" 
                name="time" 
                className = "txt1"  
                onChange = {this.handelTime} 
                onFocus = {onFocusChange} 
                onBlur = {onBlur} required></input>
            </div>
            
        </div>
    );
}
}
export default Time;