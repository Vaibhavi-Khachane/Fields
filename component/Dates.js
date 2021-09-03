import React from 'react';
import './field.css'
const Dates = ()=> {
    return(
        <div className = "container">
        <div className = "txt">
            <label for="Dob">Date of Birth</label>
            <input type="date" id="Dob" placeholder="Enter Dob" className = "txt1"></input>
        </div>
        </div>
    );
}
export default Dates;