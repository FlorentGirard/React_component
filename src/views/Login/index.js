import { Link } from "react-router-dom";
import classNames from "classnames";



import Field from "../../components/Field";

import "./styles.scss";

const Login = ({isRegister}) => {
  const classNameRegister = classNames({ "login__input--hide": isRegister });
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login </h1>
        <h2 className="login__subtitle">Déjà client ? </h2>
        <form>
          <Field
            placeholder="Name"
            name="nom"
            label="name"
            icon="fas fa-user-tie"
            className={classNameRegister}
          />
          <Field
            placeholder="Prenom"
            name="prenom"
            label="prenom"
            icon="fas fa-user-tie"
            className={classNameRegister}
          />
          <Field
            placeholder="Ville"
            name="city"
            label="prenom"
            icon="fas fa-city"
            className={classNameRegister}
          />

          <Field
            placeholder="Email"
            name="email"
            label="email"
            type="email"
            icon="fas fa-envelope"
          />
          <Field
            placeholder="Mot de passe"
            name="passworld"
            label="passworld"
            type="passworld"
            icon="fas fa-lock"
          />
          <Field
            placeholder="Confirme mot de passe"
            name="passworld"
            label="passworld"
            type="passworld"
            icon="fas fa-lock"
            className={classNameRegister}
          />

          <Link to="#" className="login__forgotPassworld">
            Mot de passe oublié ?
          </Link>
          {/* button qui envoie donné */}
          <button className="login__button login__button--login">
            Se connecter
          </button>
          <button
            className="login__button login__button--login "
            
          >
            Créer un compte
          </button>
        </form>
      </div>
      <div className=" login__container login__registerContainer">
        <h2 className="login__subtitle">Nouveau client ? </h2>

        {/* button pour gérer l'affichage  */}
        <button className="login__button login__button--register ">
          Créer un compte
        </button>
        <button className="login__button login__button--register ">
          Se connecter
        </button>
      </div>
    </div>
  );
  }

export default Login;
