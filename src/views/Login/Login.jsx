import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

import * as AuthActions from "./AuthActions";
import { RouteNames } from "../../utils/Constants";

const Login = props => {
  // const { history } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const loginUser = async values => {
    const { loginUserName, loginPassword } = values;
    try {
      const { signMeIn } = AuthActions;
      await dispatch(signMeIn(loginUserName, loginPassword));
      history.push(RouteNames.Dashboard);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="App">
      <LoginForm submit={loginUser} />
    </div>
  );
};

// const T = PropTypes;
// Login.propTypes = {
//   history: T.instanceOf(Object).isRequired
// };

// export default withRouter(Login);
export default Login;
