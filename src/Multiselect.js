import React from 'react';

const Multiselect = ()=> {
    return(
        <div>
        <select multiple>
            <option selected>Select country</option>
            <option value="1">India</option>
            <option value="2">USA</option>
            <option value="3">UK</option>
        </select>
    </div>
    );
}
export default Multiselect;