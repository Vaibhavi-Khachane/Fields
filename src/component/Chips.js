import React from 'react';
import './chips.css';
import img from'./person.png';
const Chips = ()=> {
    return(
        <button className="chip">
            <img src={img} alt='person' />
            <label>Hi how are you?</label>
        </button>
    );
}
export default Chips;