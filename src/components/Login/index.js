import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // Hint: In order for this to work you'll need to use the withRouter HOC:
    // https://reacttraining.com/react-router/web/api/withRouter
    const { history } = this.props;

    if (this.state.username === "react" && this.state.password === "1234") {
      history.push("/");
    }
  };

  handleChange = (name, event) => {
    if (name === "email") {
      this.setState({ username: event.target.value });
    } else if ((name = "password")) {
      this.setState({ password: event.target.value });
    }
    // let change = {};
    // change[name] = event.target.value;
    //You need to set the change object in the state of the component
  };

  render() {
    const { username, password } = this.state;
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl
            onChange={event => this.handleChange("email", event)}
            className="form-control"
            id="email"
            type="email"
            value={username}
            placeholder="Enter email"
          />
          <FormControl
            onChange={event => this.handleChange("password", event)}
            className="form-control"
            id="password"
            type="password"
            value={password}
            placeholder="Password"
          />
        </FormGroup>

        <Button
          bsSize="large"
          bsStyle="primary"
          block
          type="submit"
          onClick={event => this.handleSubmit(event)}
        >
          Sign in
        </Button>
      </form>
    );
  }
}

export default Login;
