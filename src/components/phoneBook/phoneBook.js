import ContactUsers from "./contactUsers/contactUsers";
import FormOfAdding from "./formOfAdding/formOfAdding";
import Filter from "./filterContacts/filterContacts";

function PhoneBook() {
  return (
    <div>
      <FormOfAdding />
      <Filter />
      <ContactUsers />
    </div>
  );
}

export default PhoneBook;
