import PropTypes from "prop-types";
import React from "react";
import InputField from "../common/InputField";
import FormButton from "../common/FormButton";
import { withFormik } from "formik";

const InnerForm = props => {
  const {
    handleSubmit,
    errors,
    values,
    setFieldValue,
    touched,
    setFieldTouched,
    isSubmitting,
    isValid
  } = props;

  return (
    <div>
      <label>Login</label>
      <form onSubmit={handleSubmit}>
        <InputField
          fieldText="Username"
          name="loginUserName"
          value={values.loginUserName}
          onChangeText={e => {
            setFieldValue("loginUserName", e.target.value);
            setFieldTouched("loginUserName", true);
          }}
          error={touched.loginUserName && errors.loginUserName}
          validationMessage={errors.loginUserName}
        />
        <InputField
          fieldText="Password"
          name="loginPassword"
          value={values.loginPassword}
          fieldType="Password"
          onChangeText={e => {
            setFieldValue("loginPassword", e.target.value);
            setFieldTouched("loginPassword", true);
          }}
          error={touched.loginPassword && errors.loginPassword}
          validationMessage={errors.loginPassword}
        />
        <div>
          <FormButton
            type="submit"
            //  disable={isSubmitting || isValid}
            text="Login"
          />
        </div>
      </form>
    </div>
  );
};

const T = PropTypes;

InnerForm.propTypes = {
  handleSubmit: T.func.isRequired,
  errors: T.shape({
    loginUserName: T.string,
    loginPassword: T.string
  }),
  values: T.shape({
    loginUserName: T.string.isRequired,
    loginPassword: T.string.isRequired
  }),
  setFieldValue: T.func.isRequired,
  touched: T.shape({
    loginUserName: T.bool,
    loginPassword: T.bool
  }),
  setFieldTouched: T.func.isRequired,
  isSubmitting: T.bool,
  isValid: T.bool
};

InnerForm.defaultProps = {
  errors: {
    loginUserName: "",
    loginPassword: ""
  },
  touched: {
    loginUserName: false,
    loginPassword: false
  },
  isSubmitting: false,
  isValid: false
};

const Enhancer = withFormik({
  // set initial values
  mapPropsToValues: () => ({
    loginUserName: "",
    loginPassword: ""
  }),
  enableReinitialize: true,
  validateOnBlur: true,
  validateOnChange: true,

  // Custom sync validation
  validate: values => {
    const errors = {};
    if (!values.loginUserName) {
      errors.loginUserName = "Username is required";
    }
    if (!values.loginPassword) {
      errors.loginPassword = "Password is required";
    }
    return errors;
  },
  handleSubmit: async (values, bag) => {
    try {
      bag.setSubmitting(true);
      await bag.props.submit(values);
      bag.setSubmitting(false);
    } catch (err) {
      bag.setSubmitting(false);
    }
  }
})(InnerForm);

const LoginForm = ({ submit }) => <Enhancer submit={submit} />;
LoginForm.propType = {
  submit: T.func.isRequired
};

export default LoginForm;
