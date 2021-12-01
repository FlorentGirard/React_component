import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";



import Field from "../../components/Field";

import "./styles.scss";
import { setUserPage } from "../../actions/user";

const Login = () => {
  const isRegister = useSelector((state) => state.user.isRegister)
  const dispatch = useDispatch();
  console.log(isRegister)
  const classNameRegister = classNames({ "login__input--hide" : isRegister });
  const classNameRegisterHide = classNames({'displayItem' : !isRegister});

 

  const handleViews = () => {
    console.log('ckick')
    dispatch(setUserPage())
  }
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Login </h1>
        <h2 className="login__subtitle">Déjà client ? </h2>
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
              type="passworld"
              icon="fas fa-lock"
            />

            <div className={classNameRegister}>
              <Field
                placeholder="Confirme mot de passe"
                name="passworld"
                label="passworld"
                type="passworld"
                icon="fas fa-lock"
              />
            </div>
          </fieldset>

          <div className={classNameRegisterHide}>
            <Link to="#" className="login__forgotPassworld">
              Mot de passe oublié ?
            </Link>
            {/* button qui envoie donné */}
            <button className="login__button login__button--login">
              Se connecter
            </button>
          </div>
          <div className={classNameRegister}>
            <button className="login__button login__button--login ">
              Créer un compte
            </button>
          </div>
        </form>
      </div>
      <div className=" login__container login__registerContainer">
        <h2 className="login__subtitle">Nouveau client ? </h2>

        {/* button pour gérer l'affichage  */}
        <div className={classNameRegisterHide}>
          <button
            className="login__button login__button--register"
            onClick={handleViews}
          >
            Créer un compte
          </button>
        </div>
        <div className={classNameRegister}>
          <button
            className="login__button login__button--register "
            onClick={handleViews}
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
  }

export default Login;
