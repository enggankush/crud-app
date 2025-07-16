import { useState } from "react";
import { Link } from "react-router-dom";
import { validation } from "./utils/validation";
import { signup } from "../services/auth.service";

const UserSignup = () => {
  // const navigate = useNavigate();
  const initialvalue = {
    name: "",
    dob: "",
    mobileNo: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [formValue, setFormValue] = useState(initialvalue);
  const [formErrors, setFormErrors] = useState({});
  const [servermessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const errors = validation(formValue, "signup");
    setFormErrors(errors);
    setServerMessage("");
    if (Object.keys(errors).length === 0) {
      console.log(formValue);
      const result = signup(formValue);
      if (result.status) {
        alert(result.msg);
        setFormValue(initialvalue);
        // setTimeout(() => {
        //   navigate("/");
        // }, 1000);
      } else {
        setServerMessage(result.msg);
      }
    }
  };

  return (
    <>
      <h2>Sing up</h2>
      <form onSubmit={handleSignup}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          autoFocus
          value={formValue.name}
          onChange={handleChange}
        />
        <span>{formErrors.name}</span>
        <input
          name="dob"
          type="date"
          placeholder="Date of Birth"
          value={formValue.dob}
          onChange={handleChange}
        />
        <span>{formErrors.dob}</span>
        <input
          name="mobileNo"
          type="text"
          placeholder="Mobile Number"
          value={formValue.mobileNo}
          onChange={handleChange}
        />
        <span>{formErrors.mobileNo}</span>
        <input
          name="email"
          type="email"
          placeholder="Email"
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
        <input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          value={formValue.confirm_password}
          onChange={handleChange}
        />
        <span>{formErrors.confirm_password}</span>
        <button type="submit">Sign up</button>
      </form>
      <span>{servermessage && <p>{servermessage}</p>}</span>
      <p>
        <Link to="/">Already have an account? Login</Link>
      </p>
    </>
  );
};

export default UserSignup;
