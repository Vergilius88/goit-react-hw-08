import { Component } from "react";
import { connect } from "react-redux";

import userOperations from "../../redux/auth/userOperations";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onRegister } = this.props;

    onRegister(this.state);

    this.setState({ name: "", password: "", email: "" });
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <h1> Register page</h1>
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
            Name
            <input
              type="text"
              name="name"
              value={name}
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

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = {
  onRegister: userOperations.registerUser,
};

export default connect(null, mapDispatch)(RegisterView);
