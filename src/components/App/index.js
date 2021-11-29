//import Components
import Field from '../Field'

//css
import "bulma/css/bulma.min.css";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Field placeholder="Login" name="login" icon="fas fa-envelope" />
      <Field placeholder="Test" name="login" />
      
    </div>
  );
}

export default App;
