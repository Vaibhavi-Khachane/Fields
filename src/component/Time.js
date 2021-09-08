import React, { Component } from 'react';
import './field.css'
class Time extends Component{
    constructor(){
        super();
        this.handelTime = this.handelTime.bind(this);
        this.state = {
           time : ''
        }
    }
    handelTime(event){
        this.setState({time:event.target.value});
    }
    
    onFocusChange =  (event) => {
        event.target.style.borderColor =   '#0f0'
     }
     
     onBlur = (event) =>{
       event.target.style.borderColor = '#5e7dd4'
     }
    render(){
    return(
        <div className = "container" style={{marginLeft:"1em"}}>
            <div className = "txt">
                <label for="time">Select a time:</label>
                <input type="time" id="time" name="time" className = "txt1"  onChange = {this.handelTime} onFocus = {this.onFocusChange} onBlur = {this.onBlur}></input>
            </div>
        </div>
    );
}
}
export default Time;