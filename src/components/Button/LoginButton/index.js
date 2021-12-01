import PropTypes from "prop-types";
import classNames from "classnames";

import './styles.scss';

const LoginButton = ({ nameButton, isButtonForm, onClick}) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    onClick();
  };

  const classNameButton = classNames(
    "loginbutton__button",
    { "loginbutton__button--login": isButtonForm },
    { "loginbutton__button--register": !isButtonForm }
  );

  return (

    <button className={classNameButton} onClick={handleClick}>
      {nameButton}
    </button>
  );
};

LoginButton.defaultProps = {
  isButtonForm: false
};

LoginButton.propTypes = {
  nameButton: PropTypes.string.isRequired,
  isButtonForm: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default LoginButton;
