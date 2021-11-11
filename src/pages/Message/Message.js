import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Message extends Component {
  render() {
    return (
      <div className="mess">
        <h1>Message</h1>
      </div>
    );
  }
}

export default withRouter(Message);
