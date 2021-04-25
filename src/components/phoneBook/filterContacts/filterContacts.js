import { connect } from "react-redux";

import phoneActions from "../../redux/phoneBook/phoneBook-actions";

const Filter = ({ onChange }) => {
  return (
    <label>
      Search contacts by name
      <input
        type="text"
        placeholder="Enter your search data."
        name="filter"
        onChange={onChange}
      />
    </label>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(phoneActions.findContact(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
