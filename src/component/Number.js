import React, { Component } from 'react';
import './field.css';
import {onBlur, onFocusChange} from './inputAction';
class Number extends Component {

    constructor(){
        super();
        this.state = {
          value : '',
          err : false
        }
        this.onBlur = onBlur;
        this.onFocusChange = onFocusChange;
        this.handelInput = this.handelInput.bind(this);
      }
      handelInput(event) {
        let num = event.target.value;
        if(!num.match(/^100|[1-9]?\d$/)){
          this.setState({err : true})
        }else{
          this.setState({err:false});
          this.setState({value:num});
        }
      }

    

    render(){
    return(
        <div className = "container">
            <div className="txt">
                <label htmlFor= "number">Age</label>
                <input 
                type = "number" 
                placeholder="Enter Number" 
                id="number" 
                className="txt1" 
                onChange = {this.handelInput} 
                value = {this.state.value} 
                onBlur = {onBlur} 
                onFocus = {onFocusChange} required>
                </input>
                {this.state.err ? <span style={{color: "red"}}>Invalid input! it should be number</span>  : ""}
            </div>
        </div>
    );
}
}
export default Number;