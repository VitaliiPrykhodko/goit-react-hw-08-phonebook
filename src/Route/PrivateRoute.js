import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../Redux/auth/auth-selector"

const PrivateRoute = ({ children}) => {
    const isLogIn = useSelector(authSelectors.getIsLoggedIn)

    return isLogIn ? children: <Navigate to="/login"/>
}

export default PrivateRoute