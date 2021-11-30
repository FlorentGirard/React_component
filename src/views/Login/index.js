import Field from "../../components/Field";

import "./styles.scss";

const Login = () => (
  <div className="login">
    <Field placeholder="Login" name="login" icon="fas fa-envelope" />
    <Field placeholder="Test" name="login" />
  </div>
);

export default Login;
