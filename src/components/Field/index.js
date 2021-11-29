import './styles.scss';
import { Input } from "semantic-ui-react";

const Field = () => (
  <div className="field">
    <label className="field__label"> Login</label>
    <Input placeholder="test" /> 
  </div>
);

export default Field;
