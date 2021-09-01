import React from 'react';
import './field.css';
import './decide.css';
const DecideBox = ()=> {
    return(
        <div className = "container">
            <div className = "txt1 con1">
                <label>Do you want to Logout?</label><br/><br/>
                    <div className = "inside">
                        <input type = "button" value="Yes" className = "btn"></input>
                        <input type = "button" value="No" className = "btn"></input>
                    </div>
            </div>
        </div>
    );
}
export default DecideBox;