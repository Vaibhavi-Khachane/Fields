import React, { Component } from 'react';
import './field.css';
class Number extends Component {

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
        <div className = "container">
            <div className="txt">
                <label htmlFor= "number">Number</label>
                <input type = "number" placeholder="Enter Number" id="number" className="txt1" onChange = {this.handelInput} value = {this.state.value} onBlur = {this.onBlur} onFocus = {this.onFocusChange}></input>
            </div>
        </div>
    );
}
}
export default Number;