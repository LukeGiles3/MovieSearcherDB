import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";
import { Card, Form, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Register() {
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
                <input placeholder="Create a username" type="text" id="username"/>
              </Form.Field>
              <Form.Field required>
                <label>Email</label>
                <input placeholder="Enter your email" type="email" id="email"/>
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <input placeholder="What's your password?" type="password" id="password"/>
              </Form.Field>
              <p>
                Already have an account? Login <Link to="/login">here</Link>
              </p>
              <Button fluid primary type="submit">
                Submit
              </Button>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
