import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Message from "../pages/Message/Message";

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <HomePage />
  },

  {
    path: '/login',
    exact: true,
    component: () => <Login />
  },
  {
    path: '',
    exact: true,
    component: () => <NotFoundPage />
  },
  {
    path: '/messages',
    exact: true,
    component: () => <Message />
  },
  {
    path: '/mypage',
    exact: true,
    component: () => <Login />
  }
];

const PrivateRoute = ({ component: Component }) => {
  const isLogin = true;

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /sign in page
    <Route
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default () => (
  <Switch>
    {routes.map(({ path, exact = true, component: Component}) => {
      return (
        <PrivateRoute
          key={path}
          exact={exact}
          path={path}
          component={Component}
        />
      );
    })}
  </Switch>
);

// export default routes
