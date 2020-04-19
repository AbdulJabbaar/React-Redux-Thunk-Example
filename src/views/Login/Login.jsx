import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

import * as AuthActions from "./AuthActions";
import { RouteNames } from "../../utils/Constants";

const Login = (props) => {
  // const { history } = props;
  const [isLoggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const loginUser = async (values) => {
    const { loginUserName, loginPassword } = values;
    debugger;
    try {
      const { signMeIn } = AuthActions;
      const response = await dispatch(signMeIn(loginUserName, loginPassword));
      console.assert(response.success, "valid record");
      if (response.success) {
        setLoggedIn(true);
      }
    } catch (err) {
      // console.error(err.message);
      alert(err.message);
      throw new Error(err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push(RouteNames.Dashboard);
    }
    // return () => {
    //   cleanup;
    // };
  }, [isLoggedIn, history]);

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
