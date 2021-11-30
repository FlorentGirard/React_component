//import npm
import { Routes, Route } from "react-router-dom";

//import Components
import Login from '../../views/Login'


//css
import "bulma/css/bulma.min.css";
import './App.scss';

function App() {
  return (
    <div className="app">
    
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
