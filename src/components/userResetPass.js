import { useState } from "react";
import { Link } from "react-router-dom";
import { validation } from "./utils/validation";
import { reset } from "../services/auth.service";

const UserResetPass = () => {
  const initialvalue = {
    email: "",
  };

  const [formValue, setFormValue] = useState(initialvalue);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleResetPass = (e) => {
    e.preventDefault();
    const errors = validation(formValue, "reset");
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formValue);
      const result = reset(formValue);
      if (!result.status) {
        setError(result.msg);
      } else {
        alert(result.msg);
        setError("");
        setFormValue(initialvalue);
      }
    }
  };

  return (
    <>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPass}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoFocus
          value={formValue.email}
          onChange={handleChange}
        />
        <span>{formErrors.email}</span>
        <button type="submit">Reset Password</button>
      </form>
      <span>{error && <p>{error}</p>}</span>
      <p>
        <Link to="/">Back to Login</Link>
      </p>
    </>
  );
};

export default UserResetPass;
