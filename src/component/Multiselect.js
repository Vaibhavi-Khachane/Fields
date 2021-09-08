import React, { Component } from 'react';
import './select.css';
class Multiselect extends Component{

    constructor(){
        super();
        this.state = {
          value : ''
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
            <select multiple className='sel' style = {{marginTop: "2em"}} value = {this.state.value} onChange = {this.handelInput} onBlur = {this.onBlur} onFocus = {this.onFocusChange}>
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