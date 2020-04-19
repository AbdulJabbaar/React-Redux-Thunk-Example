import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteNames } from "../utils/Constants";
import Common from "../utils/Common";

const Home = lazy(() => import("../views/Home/Home"));
const Login = lazy(() => import("../views/Login/Login"));

const Routes = () => {
  const authGuard = (SuccessComponent, FailComponentName) => {
    const userInfo = Common.getAuth();
    // const isLoggedIn = userInfo ? true : false;
    if (userInfo) {
      return <SuccessComponent />;
    }
    return <Redirect to={FailComponentName} />;
  };

  const noAuthGuard = () => {
    const userInfo = Common.getAuth();
    if (userInfo) {
      return <Redirect to={RouteNames.Dashboard} />;
    }
    return <Login />;
  };

  return (
    <Switch>
      <Route
        exact
        path={RouteNames.Dashboard}
        render={() => authGuard(Home, RouteNames.Login)}
      />
      <Route exact path={RouteNames.Login} render={() => noAuthGuard()} />
      <Route path="/" render={() => authGuard(Home, RouteNames.Login)} />
    </Switch>
  );
};

// export default withRouter(Routes);
export default Routes;
