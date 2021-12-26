import { useState } from "react";
import styles from "../Form/Form.module.css";
import { useDispatch } from "react-redux";
import authOperation from "../Redux/auth/auth-operation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperation.login({ email, password }));
    resetState();
  }

  function resetState() {
    setEmail("");
    setPassword("");
  }

  return (
    <form className={styles.form_contact} onSubmit={handleSubmit}>
      <label className={styles.form_label}>
        Email
        <input
          onChange={handleChange}
          value={email}
          className={styles.input_contact}
          type="email"
          name="email"
          required
        />
      </label>
      <label className={styles.form_label}>
        Password
        <input
          onChange={handleChange}
          value={password}
          className={styles.input_contact}
          type="password"
          name="password"
          required
        />
      </label>
      <button type="submit" className={styles.btn_contact}>
        Login
      </button>
    </form>
  );
}

export default Login;
