import React from 'react';
import './select.css';
const Multiselect = ()=> {
    return(
        <div>
        <select multiple className='sel' style = {{marginTop: "2em"}}>
            <option selected>Select Hobby</option>
            <option value="01">Playing</option>
            <option value="02">Reading</option>
            <option value="03">Drawing</option>
        </select>
    </div>
    );
}
export default Multiselect;