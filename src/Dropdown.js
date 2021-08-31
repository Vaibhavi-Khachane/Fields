import React from 'react';

const Dropdown = ()=> {
    return(
        <div>
            <select>
                <option selected>Select country</option>
                <option value="1">India</option>
                <option value="2">USA</option>
                <option value="3">UK</option>
            </select>
        </div>
    );
}
export default Dropdown;