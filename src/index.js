import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './Text';
import reportWebVitals from './reportWebVitals';
import MultiText from './MultiText';
import Number from './Number'
import Checkbox from './Checkbox';
ReactDOM.render(
  <div>
    <Text />
    <MultiText/>
    <Number/>
    <Checkbox/>
  </div>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
