import React,{Component} from 'react';
import "./field.css";
import {onBlur, onFocusChange} from './inputAction';
class MultiText extends Component{

    constructor(){
        super();
        this.state = {
          value : '',
          nameErr : false
        };
        this.onBlur = onBlur;
        this.onFocusChange = onFocusChange;
        this.handelInput = this.handelInput.bind(this);
      }
      handelInput(event) {
        let addrs = event.target.value;
        if(addrs.length > 50){
        this.setState({nameErr : true})
        } else{
          this.setState({nameErr:false});
          this.setState({value:addrs});
        }
      }

    
    render(){
        return(
            <div className="container">
            <div className="txt">
                <label htmlFor="address">Address</label>
                <textarea 
                  rows = "4" 
                  cols = "50" 
                  placeholder="Enter Address" 
                  id="address" 
                  className="txt1" 
                  onChange = {this.handelInput} 
                  value = {this.state.value} 
                  onFocus = {onFocusChange} 
                  onBlur = {onBlur} required>
                </textarea>
                {this.state.nameErr ? <span style={{color: "red"}}>Invalid input</span>  : ""}

            </div>
            </div>
);
}
}
export default MultiText;