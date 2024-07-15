import { useState } from "react";
import { useDispatch } from "react-redux";
import { registration } from "../../services/userService";
import styles from "./authorization.module.scss";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { openModal } from "../../redux/slices/modalSlice";

const Registration = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registration(email, password);
      setEmail("");
      setPassword("");
      onSuccess();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit} className={styles.authorization}>
      <h2 className={styles.authorization__title}>Create account</h2>
      <p className={styles.authorization__descripton}>
        Start using Storefy for free
      </p>
      <Input
        className={styles.authorization__input}
        onChange={handleEmailChange}
        value={email}
        type="email"
        placeholder="Enter ypur email"
        required
      />
      <Input
        className={styles.authorization__input}
        onChange={handlePasswordChange}
        value={password}
        type="password"
        placeholder="Create password"
        required
      />
      <Button className={styles.authorization__button} type="submit">
        Create account
      </Button>
      <p className={styles.authorization__prompt}>
        Already have Storeify?{" "}
        <button
          className={styles.authorization__loginLink}
          onClick={() => dispatch(openModal("login"))}
          type="button"
        >
          Log In
        </button>
      </p>
    </form>
  );
};

export default Registration;
