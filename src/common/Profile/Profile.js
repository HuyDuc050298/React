import React, { Component } from "react";
import "./Profile.scss";

class Profile extends Component {

  render() {
    var { user } = this.props;

    return (
      <div className="profile-body col-6 col-sm-4 col-md-3">
        <div className="profile-image">
          <img className="multi" src={user.image_url} />
        </div>
      </div>
    );
  }
}

export default Profile