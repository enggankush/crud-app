export const validation = (data, formName) => {
  const { name, dob, mobileNo, email, password, confirm_password } = data;
  const errors = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const mobileRegex = /^[6-9]\d{9}$/;

  if (activeForm("name", formName)) {
    if (!name) {
      errors.name = "Name is required";
    }
  }
  if (activeForm("dob", formName)) {
    if (!dob) {
      errors.dob = "DOB is required";
    }
  }
  if (activeForm("mobileNo", formName)) {
    if (!mobileNo) {
      errors.mobileNo = "Mobile Number is required";
    } else if (!mobileNo.match(mobileRegex)) {
      errors.mobileNo = "Mobile Number must be 10 digits";
    }
  }
  if (activeForm("email", formName)) {
    if (!email) {
      errors.email = "Email is required";
    } else if (!email.match(emailRegex)) {
      errors.email = "Invalid email format";
    }
  }
  if (activeForm("password", formName)) {
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  }
  if (activeForm("confirm_password", formName)) {
    if (!confirm_password) {
      errors.confirm_password = "Confirm Password is required";
    } else if (password && confirm_password && password !== confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }
  }

  return errors;
};

const activeForm = (field, formName) => {
  const fields = {
    name: ["signup"],
    dob: ["signup"],
    mobileNo: ["signup"],
    email: ["signup", "login", "reset"],
    password: ["signup", "login"],
    confirm_password: ["signup"],
  };
  return fields[field].includes(formName);
};
