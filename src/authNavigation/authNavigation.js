import { Link } from "react-router-dom";
import styles from "./authNavigation.module.css"

export default function authNavigation() {
    return (
        <nav>
            <Link className= {styles.link} to='/register'>Registration</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
}