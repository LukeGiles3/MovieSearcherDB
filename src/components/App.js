import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './auth/PrivateRoutes';
import Home from './main/Home';
import Login from './auth/Login'
import { AuthContext } from "../context/Context";
import Register from "./auth/Register";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/" component={Home} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
