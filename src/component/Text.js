import React, { Component } from 'react';
import './field.css';
import {onBlur, onFocusChange} from './inputAction';
class Text extends Component{

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
        let user = event.target.value;
        if(user.length  > 20 || !user.match(/^[a-zA-Z]+$/)){
          this.setState({nameErr : true})
        }else{
          this.setState({nameErr:false});
          this.setState({value:user});
        }

      } 

     
      
     
      render(){
        return(
        <div className="container">
            <div className="txt">
                <label for= "txt1">Enter Name:</label>
                <input 
                type = "text" 
                placeholder="Enter Name" 
                className="txt1" 
                onFocus = {onFocusChange} 
                onBlur = {onBlur} 
                onChange = {this.handelInput} 
                value = {this.state.value} required/>
                {this.state.nameErr ? <span style={{color: "red"}}>Invalid input</span>  : ""}
            </div>
        </div>
    );
}
}
export default Text;