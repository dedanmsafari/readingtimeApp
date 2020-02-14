import React, { Component } from "react";
class ReadingTime extends Component {

  static defaultProps = {
      wordsPerMinute: 270,
      textColor: 'blue'
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
    const {readTime} = this.state;
    const minutes = readTime === 1 ? 'minute':'minutes';
    return ( 
          <h4 style = {{color: this.props.textColor}}>Estimated Readingtime: {readTime} {minutes}</h4>
    );
  }
}

export default ReadingTime;
