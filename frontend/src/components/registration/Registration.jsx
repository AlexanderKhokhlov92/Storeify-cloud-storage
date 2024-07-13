import { useState } from "react";
import { registration } from "../../services/userService";

const Registration = () => {
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
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="{styles.registration}">
      <h2>Registration</h2>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
