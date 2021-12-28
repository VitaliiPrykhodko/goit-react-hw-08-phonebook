import Navigation from "./Navigation/Navigation";
import styles from "./App.module.css";
import UserMenu from "./UserMenu/UserMenu";
import AuthNavigation from "./authNavigation/authNavigation";
import { useSelector } from "react-redux";
import authSelectors from "./Redux/auth/auth-selector";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import authOperation from "./Redux/auth/auth-operation";
import { useDispatch } from "react-redux";
import PrivateRoute from "./Route/PrivateRoute";
import PublicRoute from "./Route/PublicRoute";
import authSelector from "./Redux/auth/auth-selector";

const HomePage = lazy(() => import("./HomePage/HomePage.js"));
const Registration = lazy(() => import("./Register/Register.js"));
const Login = lazy(() => import("./Login/Login.js"));
const Contacts = lazy(() => import("./Contacts/Contacts.js"));

function App() {
  const isLoading = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const isFetch = useSelector(authSelector.getFetchCurrentUser);

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetch && (
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
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute redirect redirectTo="/login">
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirect redirectTo="/contacts">
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
    )
  );
}

export default App;
