import React, { Component } from 'react';
import './field.css'
class Dates extends Component{
    constructor(){
        super();
        this.handleDate = this.handleDate.bind(this);
        this.state = {
           date : ''
        }
    }
    handleDate(event){
        this.setState({date:event.target.value});
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
            <label for="Dob">Date of Birth</label>
            <input type="date" id="Dob" placeholder="Enter Dob" onChange = {this.handleDate} className = "txt1" onFocus = {this.onFocusChange} onBlur = {this.onBlur}></input>
        </div>
        </div>
    );
}
}
export default Dates;