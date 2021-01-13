import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";
import { Card, Form, Button, Icon } from "semantic-ui-react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");  

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {username});
    }
    catch(error){
      console.error('an error occurred')
    }

    setEmail("");
    setPassword("");
    setUsername("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setUsername(value);
    } 
  };
  return (
    <div className="card">
      <Card raised>
        <Card.Content>
          <Card.Header textAlign="center">MovieSearcherDB</Card.Header>
          <Card.Meta textAlign="center">
            Register <Icon name="user" />
          </Card.Meta>
          <Card.Description>
            <Form>
              <Form.Field required>
                <label>Username</label>
                <input
                  placeholder="Create a username"
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(event) => onChangeHandler(event)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Email</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => onChangeHandler(event)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <input
                  placeholder="What's your password?"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(event) => onChangeHandler(event)}
                />
              </Form.Field>
              <p>
                Already have an account? Login <Link to="/">here</Link>
              </p>
              <Button
                fluid
                primary
                type="submit"
                onClick={(event) => {
                  createUserWithEmailAndPasswordHandler(event, email, password);
                }}
              >
                Submit
              </Button>
              <Button
                onClick={() => {
                  signInWithGoogle();
                }}
                fluid
                color="google plus"
              >
                <Icon name="google plus g" /> Register with Google+
              </Button>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
