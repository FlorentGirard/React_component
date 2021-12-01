import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";



import Field from "../../components/Field";
import LoginButton from "../../components/Button/LoginButton";

import "./styles.scss";
import { setUserPage } from "../../actions/user";

const Login = () => {
  const isRegister = useSelector((state) => state.user.isRegister)
  const dispatch = useDispatch();
  console.log(isRegister)
  const classNameRegister = classNames({ "displayItem": isRegister });
  const classNameRegisterHide = classNames({'displayItem' : !isRegister});

 

  const handleViews = () => {
    dispatch(setUserPage())
  }

  const handleRegister = (evt) => {
    evt.preventDefault()
    console.log('register')
  }

  const handleLogin = (evt) => {
    evt.preventDefault();
    console.log('login')
  }

  
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login </h1>
        <h2 className="login__subtitle">
          {isRegister ? "Déjà client ?" : "Nouveau client ?"}
        </h2>
        <form>
          <fieldset className={classNameRegister}>
            <legend className="hideItem"> Identité </legend>
            <Field
              placeholder="Name"
              name="nom"
              label="name"
              icon="fas fa-user-tie"
            />

            <Field
              placeholder="Prenom"
              name="prenom"
              label="prenom"
              icon="fas fa-user-tie"
            />
          </fieldset>
          <fieldset className={classNameRegister}>
            <legend className="hideItem">Lieux de résidence</legend>
            <Field
              placeholder="Ville"
              name="city"
              label="prenom"
              icon="fas fa-city"
            />
          </fieldset>

          <fieldset>
            <legend className="hideItem">E-mail</legend>
            <Field
              placeholder="Email"
              name="email"
              label="email"
              type="email"
              icon="fas fa-envelope"
            />
          </fieldset>
          <fieldset>
            <legend className="hideItem">Mot de passe</legend>
            <Field
              placeholder="Mot de passe"
              name="passworld"
              label="passworld"
              type="password"
              icon="fas fa-lock"
            />

            <div className={classNameRegister}>
              <Field
                placeholder="Confirme mot de passe"
                name="passworld"
                label="passworld"
                type="password"
                icon="fas fa-lock"
              />
            </div>
          </fieldset>

          <div className={classNameRegisterHide}>
            <Link to="#" className="login__forgotPassworld">
              Mot de passe oublié ?
            </Link>
            {/* button qui envoie donné */}
            <LoginButton nameButton="Se connecter" isButtonForm onClick={handleLogin}/>
          </div>
          <div className={classNameRegister}>
            <LoginButton nameButton="Créer un compte" isButtonForm onClick={handleRegister}/>
          </div>
        </form>
      </div>
      <div className=" login__container login__registerContainer">
        <h2 className="login__subtitle">
          {isRegister ? "Nouveau client ?" : "Dejà client ?"}
        </h2>

        {/* button pour gérer l'affichage  */}
        <div className={classNameRegisterHide}>
          <LoginButton nameButton="Créer un compte" onClick={handleViews} />
        </div>

        <div className={classNameRegister}>
          <LoginButton nameButton="Se connecter" onClick={handleViews} />
        </div>
      </div>
    </div>
  );
  }

export default Login;
