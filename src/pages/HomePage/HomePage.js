import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Profile from "../../common/Profile/Profile";
import { getUsers } from '../../modules/user/store/services';
import "./HomePage.scss"

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let data = {
      page: 1,
      type: 2,
      perpage: 8,
    };
    getUsers(data).then(res => {
      this.setState({
        users: res.data.users
      });
    });
  }

  render() {
    let { users } = this.state;

    return (
      <div className="home-body row">
        {this.showUser(users)}
      </div>
    );
  }

  showUser(users) {
    var result = null;
    if (users.length > 0) {
      result = users.map((user, index) => {
        return (
          <Profile
            key={index}
            user={user}
          />
        )
      })
    }

    return result;
  }
}

export default withRouter(HomePage)
