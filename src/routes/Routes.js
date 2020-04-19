import React, { lazy } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { RouteNames } from "../utils/Constants";
import Common from "../utils/Common";

const Home = lazy(() => import("../views/Home/Home"));
const Login = lazy(() => import("../views/Login/Login"));

const Routes = () => {
  const userInfo = Common.getAuth();

  let isLoggedIn = false;
  if (userInfo) isLoggedIn = true;

  const authGuard = (SuccessComponent, FailComponentName) => {
    debugger;
    if (isLoggedIn) {
      return <SuccessComponent />;
    }
    return <Redirect to={FailComponentName} />;
  };

  const noAuthGuard = () => {
    debugger;
    if (isLoggedIn) {
      return <Redirect to={RouteNames.Home} />;
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
