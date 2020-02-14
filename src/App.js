import React, { Component } from 'react';
import Readingtime from '../src/components/readingtime';
class App extends Component {

  constructor(props){
super(props);
this.state = {text:'Today is a great day'}
 this.handleChange = this.handleChange.bind(this)
  }

 handleChange(e) {
  this.setState({text: e.target.value});
}
  render() { 
    return (  
      <div className="container">
      <h4>Basic Reading time App </h4>
      <div className="row">
        <div className="col-md-8">
          <div className="form-group">
            <textarea 
            
            value={this.state.text}
            onChange={this.handleChange}
            id="readingtextarea" cols="105" rows="15"></textarea>
          </div>
        </div>
        <div className="col-md-4">
        < Readingtime  text={this.state.text} />
        </div>
      </div>
    </div> 
    );
  }
}
 
export default App;