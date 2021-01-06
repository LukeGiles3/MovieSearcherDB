import React, {useState} from 'react'
import './App.css';
import Home from './main/Home'
import Login from './auth/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  }

    return (
      <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
