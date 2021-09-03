import React from 'react';
import "./field.css";
const MultiText = ()=>{
return(
    <div className="container">
    <div className="txt">
        <label for="address">Address</label>
        <textarea rows = "4" cols = "50" placeholder="Enter Address" id="address" className="txt1"></textarea>
    </div>
    </div>
);
}
export default MultiText;