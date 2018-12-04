import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    // Here you'll need to set up the state of the form
    this.state = {
      email: "",
      emailHasError: false,
      password: "",
      passwordError: false,
      submissionHasError: false
    };
  }

  handleChange = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { history } = this.props;
    const { password, email } = this.state;

    if (!this.state.email) {
      this.setState({ emailHasError: true });
    }
    if (!this.state.password) {
      this.setState({ passwordHasError: true });
    } else {
      const { status } = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ password, email })
      });

      console.log("status", status);
      if (status === 200) {
        history.push("/");
      } else {
        this.setState({ submissionHasError: true });
      }
    }
  };

  render() {
    const {
      email,
      emailHasError,
      password,
      passwordHasError,
      submissionHasError
    } = this.state;

    return (
      <form className="form-signin">
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={e => this.handleChange("email", e)}
          />
          {emailHasError && !submissionHasError && (
            <p style={{ color: "red" }}>Oi! Pay attention to me!</p>
          )}
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={e => this.handleChange("password", e)}
          />
          {passwordHasError && !submissionHasError && (
            <p style={{ color: "red" }}>Oi! Pay attention to me!</p>
          )}
          {submissionHasError && (
            <p style={{ color: "red" }}>Yo that's wrong!</p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          onClick={this.handleSubmit}
        >
          Sign in
        </button>
      </form>
    );
  }
}

export default Login;
