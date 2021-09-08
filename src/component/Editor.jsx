import React ,{useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './editor.css';
import './field.css'
function Editor(){
    const [text,setText] = useState(''); 
      return(
        <div className = "editor cont1 container">
          <CKEditor  
          editor = {ClassicEditor}
          data = {text}
          onChange = {(event,editor) =>{
              const data = editor.getData()
              setText(data)

          }}
          />
        </div> 
      );
  }

export default Editor;