import React from 'react';
import './field.css';
const Number = ()=> {
    return(
        <div className = "container">
            <div className="txt">
                <label for= "number">Number</label>
                <input type = "number" placeholder="Enter Number" id="number" className="txt1"></input>
            </div>
        </div>
    );
}
export default Number;