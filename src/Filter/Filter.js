import styles from "./Filter.module.css";
import { useSelector } from "react-redux";
import {changeFilter} from "../Redux/Counter/counter-action";
import { useDispatch } from "react-redux";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  function handleFilter(e) {
    const { value } = e.currentTarget;
    dispatch(changeFilter(value));
  }
  return (
    <div className={styles.filter_box}>
      <label className={styles.filter_label}>
        Find contacts by name
        <input
          onChange={handleFilter}
          value={filter}
          className={styles.input_filter}
          type="text"
        />
      </label>
    </div>
  );
};

export default Filter;
