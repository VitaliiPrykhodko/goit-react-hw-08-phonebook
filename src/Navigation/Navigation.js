import { Link } from "react-router-dom";
import styles from "./Navigation.module.css"

export default function Navigation() {
    return (
        <nav>
            <Link className={styles.link} to='/'>Home</Link>
            <Link to='/contacts'>Contacts</Link>
        </nav>
    )
}