import React from 'react';
import './field.css';
const Text = ()=> {
    return(
        <div className="container">
            <div className="txt">
                <label for= "txt1">Enter text</label>
                <input type = "text" placeholder="Enter text" className="txt1"></input>
            </div>
        </div>
    );
}
export default Text;