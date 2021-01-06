import React from "react";
import "semantic-ui-css/semantic.min.css";
import {Card} from 'semantic-ui-react'

class Login extends React.Component {
  render() {
      return (
    <Card raised="true">
      <Card.Content>
        <Card.Header>Login to MovieSearcherDB</Card.Header>
        <Card.Description>
          Login here.
        </Card.Description>
      </Card.Content>
    </Card>
    )
  }
}

export default Login
