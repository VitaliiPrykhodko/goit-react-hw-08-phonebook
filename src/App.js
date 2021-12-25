import Form from "./Form/Form";
import ContactList from "./Contacts/ContactsList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
        <h1>Phonebook</h1>
        <Form />
        <h2 className="contact_title">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  );
}

export default App;
