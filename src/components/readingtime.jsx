import React, { Component } from "react";
class ReadingTime extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <h1>Reading time</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <textarea id="readingtextarea" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <div className="readtime">
              <h4>Estimated Readingtime:</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadingTime;
