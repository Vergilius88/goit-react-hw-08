import { Component } from "react";
import { connect } from "react-redux";

import userOperations from "../../redux/auth/userOperations";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onLogin } = this.props;
    onLogin({ ...this.state });
    this.setState({ password: "", email: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1> Login page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = {
  onLogin: userOperations.loginUser,
};

export default connect(null, mapDispatch)(LoginView);
