import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LogoHeader from "../../assets/images/header/logo-prego.svg";
import * as Icon from 'react-bootstrap-icons';
import "./Header.scss"

class Header extends Component {
  showNotification() {
    console.log('notification');
  };

  render() {
    return (
      <div className="header-body position-fixed">
        <div className="d-flex header justify-content-between align-items-center">
          <Icon.GridFill width="25px" height="25px"/>
          <h3 className="header-name mb-0">ReactJS</h3>
          <Icon.Bell className="header-icon" width="25px" height="25px" onClick={this.showNotification}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Header)