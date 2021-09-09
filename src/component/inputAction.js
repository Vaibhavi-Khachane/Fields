const onFocusChange =  (event) => {
    event.target.style.borderColor =   '#0f0'
 }
 
const onBlur = (event) =>{
   event.target.style.borderColor = '#5e7dd4'
 }
 export {
     onFocusChange,
     onBlur
 };