import PropTypes from "prop-types";
import classNames from "classnames";

import './styles.scss';

const LoginButton = ({ nameButton , isButtonForm}) => {
const classNameButton = classNames('loginbutton__button' ,{'loginbutton__button--login' : isButtonForm}, {'login__button--register' : !isButtonForm} )

return (
  <div className="loginButton">
    <button className={classNameButton}>{nameButton}</button>
  </div>
);
};

LoginButton.propTypes = {
  nameButton: PropTypes.string.isRequired,
  isButtonForm: PropTypes.bool.isRequired
};

export default LoginButton;
