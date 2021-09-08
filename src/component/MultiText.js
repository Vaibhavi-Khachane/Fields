import React,{Component} from 'react';
import "./field.css";
class MultiText extends Component{

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
            <div className="container">
            <div className="txt">
                <label for="address">Address</label>
                <textarea rows = "4" cols = "50" placeholder="Enter Address" id="address" className="txt1" onChange = {this.handelInput} value = {this.state.value} onFocus = {this.onFocusChange} onBlur = {this.onBlur}></textarea>
            </div>
            </div>
);
}
}
export default MultiText;