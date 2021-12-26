import Form from "../Form/Form";
import ContactList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";

const Contacts = () => {
  return (
    <>
      <Form />
      <h2 className="contact_title">Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
