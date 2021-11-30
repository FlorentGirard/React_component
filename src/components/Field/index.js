import PropTypes from "prop-types";
import classNames from "classnames";


import "./styles.scss";

// isHide gére l'affichage du label par defaul il est caché 
const Field = ({ type, placeholder, name, icon, label, isHide}) => {

  
    const className = classNames( {'control has-icons-left' : icon})
    const classNameHide = classNames({'hideItem' : isHide})
  
    return (
      <div className="field">
         <label className={classNameHide}> {label}</label> 
        <div className={className}>
          <input
            placeholder={placeholder}
            name={name}
            type={type}
            className="input"
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
  isHide: true
 
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  isHide: PropTypes.bool
  
};

export default Field;
