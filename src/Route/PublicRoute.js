import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../Redux/auth/auth-selector"

const PublicRoute = ({ children, redirect = false, redirectTo ="/"}) => {
    const isLogIn = useSelector(authSelectors.getIsLoggedIn)
    const showRedirect = isLogIn && redirect
    return showRedirect ? <Navigate to={redirectTo}/> : children 
}

export default PublicRoute