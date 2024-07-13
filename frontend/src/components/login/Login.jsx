import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../services/userService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(login(email, password));
      }}
      className="{styles.registration}"
    >
      <h2>Login</h2>
      <input
        onChange={handleEmailChange}
        value={email}
        type="email"
        placeholder="Email"
        required
      />
      <input
        onChange={handlePasswordChange}
        value={password}
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default Login;
