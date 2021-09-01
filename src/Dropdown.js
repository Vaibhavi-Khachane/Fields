import React from 'react';
import './select.css';
const Dropdown = ()=> {
    return(
        <div>
            <select className = 'sel'>
                <option selected>Select country</option>
                <option value="1">India</option>
                <option value="2">USA</option>
                <option value="3">UK</option>
            </select>
        </div>
    );
}
export default Dropdown;