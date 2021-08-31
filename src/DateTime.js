import React from 'react';

const DateTime = ()=> {
    return(
        <div>
            <label for="datetime">Birthday (date and time):</label>
            <input type="datetime-local" id="datetime" name="datetime"/>
        </div>
    );
}
export default DateTime;