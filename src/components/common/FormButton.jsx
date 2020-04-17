import React from "react";
import PropTypes from "prop-types";

const FormButton = props => {
  const { text, type, onClick, disable, dataAttr } = props;

  return (
    <button
      data-test={dataAttr}
      disabled={disable}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const T = PropTypes;
FormButton.propTypes = {
  text: T.string,
  type: T.string,
  onClick: T.func,
  disable: T.bool,
  dataAttr: T.string
};

FormButton.defaultProps = {
  text: "",
  type: "button",
  onClick: null,
  disable: false,
  dataAttr: ""
};

export default FormButton;
