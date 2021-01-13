import React, { useContext } from "react";
import {Router} from "@reach/router";
import Login from "./Login";
import Register from "./Register";
import Home from "../main/Home";
import { UserContext } from "../context/Context";

function Application() {
  const user = useContext(UserContext);
  return (
    user ? 
    <Home /> 
    : 
    <Router>
      <Register path="/register" />
      <Login path="/" />
    </Router>
  );
}

export default Application;
