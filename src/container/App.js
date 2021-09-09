
import { Component } from 'react';
import MultiText from '../component/MultiText';
import Number from '../component/Number'
import Checkbox from '../component/Checkbox';
import Radio from '../component/Radio';
import Dropdown from '../component/Dropdown';
import Multiselect from '../component/Multiselect';
import Time from '../component/Time';
import Dates from '../component/Dates';
import DatesTime from '../component/DatesTime';
// import DecideBox from './component/DecideBox';
// import Chips from './component/Chips';
// import RichLine from './RichLine.jsx';
import Editor from '../component/Editor';
import Text from '../component/Text';
import '../component/field.css';
import '../component/form.css';
import '../component/decide.css';
// import Submits from './component/Submits';
class App extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleSubmit(event) {

    alert('A data was submitted');
    event.preventDefault();
  }
  render(){
    return(
      <div className = "box">
        <form onSubmit = {this.handleSubmit} className = "form">
          <div>
            <h1 align = "center">Form</h1>
            <Text/>
            <MultiText/>
            <Number/>
            <Checkbox/><br/><br/><br/><br/>
            <Radio/>
            <Dropdown/>
            <Multiselect/>
            <Time/>
            <Dates/>
            <DatesTime/>
            {/* <DecideBox/> */}
            {/* <Chips/> */}
            <Editor/>
            <input type = 'submit' className = "btn" style = {{marginLeft:'350px'}}></input>
          </div>
      </form>
    </div>
    );
  }  
}

export default App;
