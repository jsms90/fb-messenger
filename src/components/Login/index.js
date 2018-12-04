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

  handleChange = (name, value) => {
    this.setState({ [name]: value });
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
            onChange={event =>
              this.handleChange("username", event.target.value)
            }
            className="form-control"
            id="email"
            type="email"
            value={username}
            placeholder="Enter email"
          />
          <FormControl
            onChange={event =>
              this.handleChange("password", event.target.value)
            }
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
