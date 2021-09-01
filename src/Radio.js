import React from 'react';
import './check.css';
import './field.css';
const Radio = ()=> {
    return(
        <div className="container">
        <div className = "lbl"><br/>
        <label>Select any options</label><br/><br/>
        <input type = "radio" id="optnn1" className="check" name="opt"></input>
        <label htmlFor="optnn1" className="lbln">Option1</label><br></br><br></br>

        <input type = "radio" id="optnn2" className="check" name="opt"></input>
        <label htmlFor="optnn2" className="lbln">Option2</label><br></br><br></br>

        <input type = "radio" id="optnn3" className="check" name="opt"></input>
        <label htmlFor="optnn3" className="lbln">Option3</label>
        </div>
    </div>
    );
}
export default Radio;