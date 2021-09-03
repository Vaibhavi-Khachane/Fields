import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faBold, faFileImage, faItalic, faLink, faListOl, faListUl, faUnderline} from '@fortawesome/free-solid-svg-icons'
import './rich.css';
// import './field.css'
const RichLine = () => {
return(
    <div className = "cont1">
    <form className = "f1">
        <button data-cmd = "justifyLeft" className = "btn1">
            <FontAwesomeIcon icon = {faAlignLeft}/>
        </button>

        <button data-cmd = "justifyCenter" className = "btn1">
            <FontAwesomeIcon icon = {faAlignCenter}/>
        </button>

        <button data-cmd = "justifyRight" className = "btn1">
            <FontAwesomeIcon icon = {faAlignRight}/>
        </button>

        <button data-cmd = "justifyFull" className = "btn1">
            <FontAwesomeIcon icon = {faAlignJustify}/>
        </button>

        <button data-cmd = "bold" className = "btn1">
            <FontAwesomeIcon icon = {faBold}/>
        </button>

        <button data-cmd = "italic" className = "btn1">
            <FontAwesomeIcon icon = {faItalic}/>
        </button>

        <button data-cmd = "uderline" className = "btn1">
            <FontAwesomeIcon icon = {faUnderline}/>
        </button>

        <button data-cmd = "insertOrderedList" className = "btn1">
            <FontAwesomeIcon icon = {faListOl}/>
        </button>

        <button data-cmd = "insertUnorderedList" className = "btn1">
            <FontAwesomeIcon icon = {faListUl}/>
        </button>

        <button data-cmd = "insertImage" className = "btn1">
            <FontAwesomeIcon icon = {faFileImage}/>
        </button>

        <button data-cmd = "createLink" className = "btn1">
            <FontAwesomeIcon icon = {faLink}/>
        </button>
        <div>
            <iframe id = "output" name = "textField" title = "textfield"></iframe>
        </div>

        </form>
    </div>
);
}

export default RichLine;