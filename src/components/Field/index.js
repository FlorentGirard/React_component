import PropTypes from "prop-types";

import "./styles.scss";
import { Input } from "semantic-ui-react";

const Field = ({ type, placeholder, name }) => {
    // const
    return (
  <div className="field">
    <label className="field__label"> {placeholder}</label>
    <Input placeholder={placeholder} name={name} type={type} />
  </div>
);
};

Field.defaultProps = {
  type: "text",
  placeholder: "",
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Field;
