import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";
import { Card, Form, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <div className="card">
      <Card raised>
        <Card.Content>
          <Card.Header textAlign="center">MovieSearcherDB</Card.Header>
          <Card.Meta textAlign="center">
            Login <Icon name="lock" />
          </Card.Meta>
          <Card.Description>
            <Form>
              <Form.Field required>
                <label>Email</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <input
                  placeholder="What's your password?"
                  type="password"
                  id="password"
                  value={password}
                  name="password"
                  onChange={(event) => onChangeHandler(event)}
                />
              </Form.Field>
              <p>
                Don't have an account? Sign up <Link to="/register">here</Link>
              </p>
              <Button
                fluid
                primary
                type="submit"
                onClick={(event) => {
                  signInWithEmailAndPasswordHandler(event, email, password);
                }}
              >
                Submit
              </Button>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
