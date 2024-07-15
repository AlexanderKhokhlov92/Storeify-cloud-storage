import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../services/userService";
import styles from "./authorization.module.scss";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { openModal } from "../../redux/slices/modalSlice";

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
      .then(() => {
        onSuccess();
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <form onSubmit={handleLogin} className={styles.authorization}>
      <h2 className={styles.authorization__title}>Login</h2>
      <p className={styles.authorization__descripton}>
        Welcome back to Storefy
      </p>
      <Input
        className={styles.authorization__input}
        onChange={handleEmailChange}
        value={email}
        type="email"
        placeholder="Email"
        required
      />
      <Input
        className={styles.authorization__input}
        onChange={handlePasswordChange}
        value={password}
        type="password"
        placeholder="Password"
        required
      />
      <Button className={styles.authorization__button} type="submit">
        Go
      </Button>
      <p className={styles.authorization__prompt}>
        Don`t have an account?{" "}
        <button
          className={styles.authorization__loginLink}
          onClick={() => dispatch(openModal("registration"))}
          type="button"
        >
          Create account
        </button>
      </p>
    </form>
  );
};

export default Login;
