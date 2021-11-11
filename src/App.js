import './App.css';
import React, { Component } from 'react';
import AppRouter from './utils/routes';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContainer from './common/AppContainer';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Cookie from "js-cookie";

class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component }) => {
      const isLogin = Cookie.get("prego_token");

      return (
        <Route
          render={(props) =>
            isLogin ? <Component {...props} /> : <Redirect to="/login" />
          }
        />
      );
    };
    
    return (
      <Router>
        <div className="App">
        <AppContainer>
          <Header />
          <div>
            <Switch>
              <PrivateRoute exact path="/home" component={HomePage} />
              <AppRouter />
            </Switch>
          </div>
          <Menu />
          </AppContainer>
        </div>
      </Router>
    );
  }

  // showContentMenus = (routes) => {
  //   var results = null;
  //   if (routes.length > 0) {
  //     results = routes.map((route, index) => {
  //       return (<Route
  //         key={index}
  //         path={route.path}
  //         exact={route.exact}
  //         component={route.main}
  //       />)
  //     })
  //   }

  //   return <Switch>{results}</Switch>
  // }
}

export default App;
