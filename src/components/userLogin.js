import { useState } from "react";
import { Link } from "react-router-dom";
import { validation } from "./utils/validation";
import { login } from "../services/auth.service";

const UserLogin = () => {
  const initialvalue = {
    email: "",
    password: "",
  };

  const [formValue, setformValue] = useState(initialvalue);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validation(formValue, "login");
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formValue);
      const result = login(formValue);
      if (!result.status) {
        setError(result.msg);
      } else {
        alert(result.msg);
        setError("");
        setformValue(initialvalue);
      }
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoFocus
          value={formValue.email}
          onChange={handleChange}
        />
        <span>{formErrors.email}</span>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formValue.password}
          onChange={handleChange}
        />
        <span>{formErrors.password}</span>
        <button type="submit">Login</button>
      </form>
      <span>{error && <p>{error}</p>}</span>
      <p>
        <Link to={"/signup"}>Don't have an account? Sign up</Link>
      </p>
      <p>
        <Link to={"/reset-pass"}>Forgot Password?</Link>
      </p>
    </>
  );
};

export default UserLogin;
