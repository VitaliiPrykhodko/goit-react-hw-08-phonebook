import { useState } from "react";
import styles from "./Form.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/Counter/counter-operation";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  function handleAddContact(name, number) {
    if (
      contacts.find((contact) => {
        return contact.name === name;
      })
    )
      return alert(`${name} is already in contacts`);

    if (name === "" || number === "") return alert("Please enter correct name");
    else {
      dispatch(addContact({ name, number }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  }

  function handleClick() {
    handleAddContact(name, number);
    resetState();
  }

  function resetState() {
    setName("");
    setNumber("");
  }

  return (
    <form className={styles.form_contact}>
      <label className={styles.form_label}>
        Name
        <input
          onChange={handleChange}
          value={name}
          className={styles.input_contact}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.form_label}>
        Number
        <input
          onChange={handleChange}
          value={number}
          className={styles.input_contact}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button
        type="button"
        className={styles.btn_contact}
        onClick={()=>handleClick()}
      >
        Add contact
      </button>
    </form>
  );
}

export default Form;
