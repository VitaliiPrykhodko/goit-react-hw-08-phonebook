import PropTypes from "prop-types";
import { useEffect } from "react";
import { ContactListItem } from "./ContactListItem";
import styles from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../Redux/Counter/counter-operation";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import authSelectors from "../Redux/auth/auth-selector"

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const loading = useSelector((state) => state.contacts.loading);
  const login = useSelector(authSelectors.getIsLoggedIn)
  const dispatch = useDispatch();

  useEffect(() => {
    if (login) {
      dispatch(fetchContacts())
    }
    return
  }, [dispatch, login]);

  function foundContacts() {
    const normalizeFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(normalizeFilter);
      });
    }
  }
  return (
    <>
      {loading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <ul className={styles.contact_list}>
          <ContactListItem contacts={foundContacts()} />
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default ContactList;
