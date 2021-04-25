import { Component } from "react";
import { connect } from "react-redux";
import {
  getContacts,
  getLoading,
  getFilter,
} from "../../redux/phoneBook/phoneBook-selectors";

import phoneBookOperations from "../../redux/phoneBook/phoneBook-operations";
import contactUsersStyles from "./contactUsersStyles";

const { H2, Ul, Li, Name, Button } = contactUsersStyles;

class ContactUsers extends Component {
  filterContact = (content, filter) => {
    return content.filter(
      ({ value }) => !value.name.toLowerCase().indexOf(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, onRemoveContact } = this.props;
    const filteredContacts = this.filterContact(contacts, filter);
    return (
      <>
        <H2>Contacts </H2>
        <Ul>
          {filteredContacts.map(({ value, id }) => {
            return (
              <Li key={id}>
                <Name>
                  {value.name} :{value.number}
                </Name>
                <Button onClick={() => onRemoveContact(id)}>Delete</Button>
              </Li>
            );
          })}
          {this.props.isLoading && <h1>Загрузка</h1>}
        </Ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: getContacts(state),
    filter: getFilter(state),
    isLoading: getLoading(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveContact: (id) => dispatch(phoneBookOperations.removeContact(id)),
    fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsers);
