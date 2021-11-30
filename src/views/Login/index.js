import { Link } from "react-router-dom";

import Field from "../../components/Field";

import "./styles.scss";

const Login = () => (
  <div className="login">
    <div className="login__container">
      <h1 className="login__title">Login </h1>
      <h2 className="login__subtitle">Déjà client ? </h2>
      <form>
        <Field
          placeholder="Email"
          name="email"
          type="email"
          icon="fas fa-envelope"
        />
        <Field
          placeholder="Mot de passe"
          name="passworld"
          type="passworld"
          icon="fas fa-lock"
        />

        <Link to="#" className="login__forgotPassworld">
          {" "}
          Mot de passe oublié ?{" "}
        </Link>
        <button className="login__button login__button--login">
          Se connecter
        </button>
      </form>
    </div>
    <div className=" login__container login__registerContainer">
      <h2 className="login__subtitle">Nouveau client ? </h2>
      <button className="login__button login__button--register ">
        Créer un compte
      </button>
    </div>
  </div>
);

export default Login;
