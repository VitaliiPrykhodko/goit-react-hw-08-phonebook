import { useSelector } from "react-redux";
import authSelectors from "../Redux/auth/auth-selector"
import { useDispatch } from "react-redux";
import authOperation from "../Redux/auth/auth-operation";
import styles from "./UserMenu.module.css"

const UserMenu = () => {
      const dispatch = useDispatch();
    const user = useSelector(authSelectors.getUserName)
    const email = useSelector(authSelectors.getUserEmail)
    return (
        <div className={styles.userBox}>
            <p>Well come <a href={`mailto:${email}`}>{user}</a></p>
            <button className= {styles.btn} type="button" onClick={()=>dispatch(authOperation.logOut())}>LogOut</button>
        </div>
    )
}

export default UserMenu