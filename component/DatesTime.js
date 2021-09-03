import React from 'react';
import './field.css';
const DatesTime = ()=> {
    return(
        <div className = "container">
            <div className = "txt">
                <label for="datetime">Birthday (date and time):</label>
                <input type="datetime-local" id="datetime" name="datetime" className = "txt1"/>
            </div>
        </div>
    );
}
export default DatesTime;