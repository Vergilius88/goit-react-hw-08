import { Component } from "react";
import phoneBookOperations from "../../redux/phoneBook/phoneBook-operations";
import { connect } from "react-redux";

import formOfAddingStyles from "./formOfAddingStyles";
const { Button } = formOfAddingStyles;

const INITIAL_STATE = {
  name: "",
  number: "",
};

class formOfAdding extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };
  formValidator = (e) => {
    this.state.name && this.state.number
      ? this.handleSubmit(e)
      : alert("Заполните все поля.");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state;
    const { onAddContact } = this.props;
    onAddContact(value);
    alert("Форма отправлена ");
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.formValidator}>
        <label>
          Name
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            placeholder="Your Phone"
            name="number"
            value={number}
            list="defaultTels"
            onChange={this.handleChange}
          />
          <datalist name="age" id="defaultTels">
            <option value="" disabled>
              ...
            </option>
            <option value="+38(068)">+38(068)</option>
            <option value="+38(097)">+38(097)</option>
            <option value="+38(063)">+38(063)</option>
          </datalist>
        </label>
        <Button type="submit">Create contact</Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (value) => dispatch(phoneBookOperations.addContact(value)),
  };
};
export default connect(null, mapDispatchToProps)(formOfAdding);
