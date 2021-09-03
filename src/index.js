import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Text from './Text';
import reportWebVitals from './reportWebVitals';
// import MultiText from './MultiText';
// import Number from './Number'
// import Checkbox from './Checkbox';
// import Radio from './Radio';
// import Dropdown from './Dropdown';
// import Multiselect from './Multiselect';
// import Time from './Time';
// import Dates from './Dates';
// import DatesTime from './DatesTime';
// import DecideBox from './DecideBox';
// import Chips from './Chips';
import RichLine from './RichLine';
ReactDOM.render(
  <div>
    {/* <Text/>
    <MultiText/>
    <Number/>
    <Checkbox/><br/><br/><br/><br/>
    <Radio/>
    <Dropdown/>
    <Multiselect/>
    <Time/>
    <Dates/>
    <DatesTime/>
    <DecideBox/>
    <Chips/> */}
    <RichLine/>
  </div>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
