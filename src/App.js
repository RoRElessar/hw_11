import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavbarComponent from './components/navbarComponent/navbarComponent'
import LoginComponent from './components/loginComponent/loginComponent'

function App() {
  return (
    <div>
      <Router>
        <LoginComponent/>
        {/*<NavbarComponent/>*/}
      </Router>
    </div>
  );
}

export default App;
