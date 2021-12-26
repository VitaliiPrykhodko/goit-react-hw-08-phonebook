import Navigation from "./Navigation/Navigation";
import styles from "./App.module.css";
import UserMenu from "./UserMenu/UserMenu";
import AuthNavigation from "./authNavigation/authNavigation";
import { useSelector } from "react-redux";
import authSelectors from "./Redux/auth/auth-selector";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() => import("./HomePage/HomePage.js"));
const Registration = lazy(() => import("./Register/Register.js"));
const Login = lazy(() => import("./Login/Login.js"));
const Contacts = lazy(() => import("./Contacts/Contacts.js"));

function App() {
  const isLoading = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={styles.App}>
      <header className={styles.headerPage}>
        <Navigation />
        {isLoading ? <UserMenu /> : <AuthNavigation />}
      </header>
      <hr></hr>
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
