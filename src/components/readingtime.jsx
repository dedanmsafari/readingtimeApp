import React, { Component } from "react";
class ReadingTime extends Component {
//   static propTypes = {
//       wordsPerMinute:React.propTypes.number
//   }

  static defaultProps = {
      wordsPerMinute: 270
  }

  state = {
    readTime: 0
};

componentDidUpdate(prevProps, prevState) {
    
}

countWords(text){
    return text.split(/\s+/).length
}

  render() {
    return (
        <div className="col-md-6">
        <div className="readtime">
          <h4>Estimated Readingtime:</h4>
        </div>
      </div>
    );
  }
}

export default ReadingTime;
