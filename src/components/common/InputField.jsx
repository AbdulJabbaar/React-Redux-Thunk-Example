import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  fieldType,
  fieldText,
  name,
  maxLength,
  value,
  onChangeText,
  disabled,
  error,
  withLabel,
  validationMessage
}) => {
  return (
    <div>
      <>{withLabel && <label>{fieldText}</label>}</>
      <input
        type={fieldType}
        name={name}
        maxLength={maxLength}
        onChange={onChangeText}
        disabled={disabled}
        value={value}
      />
      {error && <p>{validationMessage}</p>}
    </div>
  );
};

const T = PropTypes;
InputField.propTypes = {
  fieldType: T.string,
  fieldText: T.string,
  name: T.string,
  maxLength: T.number,
  value: T.string.isRequired,
  onChangeText: T.func,
  disabled: T.bool,
  error: T.string,
  withLabel: T.bool,
  validationMessage: T.string
};

InputField.defaultProps = {
  fieldType: "text",
  fieldText: "fieldtext",
  name: "fieldname",
  maxLength: 50,
  value: "",
  onChangeText: () => {},
  disabled: false,
  error: "",
  withLabel: true,
  validationMessage: ""
};
export default InputField;
