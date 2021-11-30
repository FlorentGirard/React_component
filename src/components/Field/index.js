import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";


const Field = ({ type, placeholder, name, icon, isLeft}) => {
    const className = classNames( {'control has-icons-left' : icon})
  
    return (
      <div className="field">
         <label className="field__label"> {placeholder}</label> 
        <div className={className}>
          <input
            placeholder={placeholder}
            name={name}
            type={type}
            className="input "
          />
          {icon && (
            <span className="icon is-small is-left">
              <i className={icon}></i>
            </span>
          )}
        </div>
      </div>
    );
};

Field.defaultProps = {
  type: "text",
  placeholder: "",
  isLeft: true
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isLeft: PropTypes.bool
};

export default Field;
