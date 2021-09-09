import React,{Component} from 'react';
import "./field.css";
import {onBlur, onFocusChange} from './inputAction';
class MultiText extends Component{

    constructor(){
        super();
        this.state = {
          value : ''
        }
        this.onBlur = onBlur;
        this.onFocusChange = onFocusChange;
        this.handelInput = this.handelInput.bind(this);
      }
      handelInput(event) {
        this.setState({value: event.target.value});
      }

    
    render(){
        return(
            <div className="container">
            <div className="txt">
                <label for="address">Address</label>
                <textarea rows = "4" cols = "50" placeholder="Enter Address" id="address" className="txt1" onChange = {this.handelInput} value = {this.state.value} onFocus = {onFocusChange} onBlur = {onBlur}></textarea>
            </div>
            </div>
);
}
}
export default MultiText;