import React from 'react';
import './field.css';
import './check.css';
const Checkbox = ()=> {
    return(
        <div className="container">
            <div className = "lbl">
            <label>Select multiple options</label><br/><br/>
            <input type = "checkbox" id="optn1" className="check"></input>
            <label htmlFor="optn1" className="lbln">Option1</label><br></br><br></br>

            <input type = "checkbox" id="optn2" className="check"></input>
            <label htmlFor="optn2" className="lbln">Option2</label><br></br><br></br>

            <input type = "checkbox" id="optn3" className="check"></input>
            <label htmlFor="optn3" className="lbln">Option3</label>
            </div>
        </div>
    );
}
export default Checkbox;