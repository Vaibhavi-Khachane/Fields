import React from 'react';
import './field.css'
const Time = ()=> {
    return(
        <div className = "container" style={{marginLeft:"2.5em"}}>
            <div className = "txt">
                <label for="time">Select a time:</label>
                <input type="time" id="time" name="time" className = "txt1"></input>
            </div>
        </div>
    );
}
export default Time;