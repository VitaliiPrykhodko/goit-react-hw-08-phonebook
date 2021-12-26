import PropTypes from "prop-types";
import styles from "./ContactsList.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../Redux/Counter/counter-operation";

const ContactListItem = ({ contacts }) => {
  const dispatch = useDispatch()
    return contacts.map(({id,name,number}) => {
       return (
    <li key={id} className={styles.contact_item}>
      <span>{name}</span>: <span>{number}</span>
      <button className={styles.contact_btn} onClick={()=> dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
   })
  };

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
}


export { ContactListItem };
