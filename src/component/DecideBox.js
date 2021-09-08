import React, { Component } from 'react';
import './field.css';
import './decide.css';
import img from'./alert.jpg';

class DecideBox extends Component{

onFocusChange = (event) =>{
    event.target.style.borderColor =   '#0f0';
}
onBlur(event){
    event.target.style.borderColor =   '#5e7dd4';
}

render(){
    return(
        <div className = "container">
            <div className = "txt1 con1">
            <img src = {img} alt = "alert" style = {{maxWidth: '25%', maxHeight : '25%'}}/><label>Do you want to Logout?</label><br/><br/>
                    <div className = "inside">
                        <input type = "button" value="Yes" className = "btn" onFocus = {this.onFocusChange} onBlur = {this.onBlur}></input>
                        <input type = "button" value="No" className = "btn"></input>
                    </div>
            </div>
        </div>
    );
}
}
export default DecideBox;