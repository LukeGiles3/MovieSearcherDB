import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './main/Home';
import Login from './auth/Login'
import Register from "./auth/Register";

function App() {
  const user = null;
  return (
    user ? 
      <Home path="/home"/> :
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
  );
}

export default App;
