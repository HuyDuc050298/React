import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Home from "../../assets/images/footer/ホーム.svg";
import HomeActive from "../../assets/images/footer/ホーム-active.svg";
import Message from "../../assets/images/footer/メッセージ.svg";
import MessageActive from "../../assets/images/footer/メッセージ-active.svg";
import Order from "../../assets/images/footer/オーダー.svg";
import OrderActive from "../../assets/images/footer/オーダー-active.svg";
import Timeline from "../../assets/images/footer/つぶやき.svg";
import TimelineActive from "../../assets/images/footer/つぶやき-active.svg";
import Mypage from "../../assets/images/footer/マイページ.svg";
import MypageActive from "../../assets/images/footer/マイページ-active.svg";
import "./Menu.scss"

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true,
    imgSrc: Home,
    imgActive: HomeActive
  },
  {
    name: 'Message',
    to: '/messages',
    exact: true,
    imgSrc: Message,
    imgActive: MessageActive
  },
  {
    name: 'Order',
    to: '/order',
    exact: true,
    imgSrc: Order,
    imgActive: OrderActive
  },
  {
    name: 'Timeline',
    to: '/timeline',
    imgSrc: Timeline,
    exact: true,
    imgActive: TimelineActive
  },
  {
    name: 'Mypage',
    to: '/mypage',
    imgSrc: Mypage,
    exact: true,
    imgActive: MypageActive
  }
];

const MenuLink = ({ label, to, active, imgSrc, imgActive, login }) => {
  return (
    <Route
      path={to}
      exact={active}
      children={({ match }) => {
        var active = match ? 'active' : 'unactive';
        return (
          <div className={active} onClick={login}>
            <Link to={to} className="d-flex flex-column align-items-center justify-content-center">
              <img className="img-unactive" src={imgSrc} />
              <img className="img-active" src={imgActive} />
              {label}
            </Link>
          </div>
        )
      }}
    />
  )
}

class Menu extends Component {
  async login(type) {
  }
  render() {
    const mystyle = {
      marginRight: '20px'
    };

    return (
      <div>
        <div className="d-flex position-fixed footer">
          {this.showMenu(menus)}
        </div>
      </div>
    );
  }

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            active={menu.exact}
            imgSrc={menu.imgSrc}
            imgActive={menu.imgActive}
            login={this.login(1)}
          />
        );
      })
    }

    return result
  }
}

export default withRouter(Menu)
