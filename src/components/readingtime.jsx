import React, { Component } from "react";
class ReadingTime extends Component {


  static defaultProps = {
      wordsPerMinute: 270
  }

  state = {
    readTime: 0
};

componentDidMount() {
  this.updateReadingTime(this.props);
 
  
}
componentDidUpdate(prevProps) {
  if (this.props.text !== prevProps.text) {
    this.updateReadingTime(this.props);
    
  }
}
updateReadingTime(props){
  const words = this.countWords(props.text)
  const readTime = Math.round(words/props.wordsPerMinute)
  this.setState({ readTime});
}

countWords(text){
    return text.split(/\s+/).length
}

  render() {
    return ( 
          <h4>Estimated Readingtime: {this.state.readTime} mins</h4>
    );
  }
}

export default ReadingTime;
