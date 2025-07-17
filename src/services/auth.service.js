export const signup = (data) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.find((user) => user.email === data.email);
  console.log("1", JSON.stringify(userExists));
  if (userExists) {
    return { status: false, msg: "Email already exists" };
  }
  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));
  return { status: true, msg: "Signup successful" };
};

export const login = (data) => {
  const { email, password } = data;
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const users = storedUsers.find((u) => u.email === email);
  console.log("2", JSON.stringify(storedUsers));
  if (!users) {
    return { status: false, msg: "Email not found. Please sign up." };
  }
  if (users.password !== password) {
    return { status: false, msg: "Incorrect Password" };
  }
  localStorage.setItem("currentUser", users.email);
  return { status: true, msg: "Login Successful" };
};

export const getCurrentUser = () => {
  const currentUserEmail = localStorage.getItem("currentUser");
  if (!currentUserEmail) return null;
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.find((u) => u.email === currentUserEmail) || null;
};
export const updateProfile = (updatedData) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const updatedUsers = users.map((user) =>
    user.email === updatedData.email ? updatedData : user
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  return { status: true, msg: "Profile updated successfully" };
};

export const logout = () => {
  localStorage.removeItem("currentUser");
  alert("Current User is Logout");
};

export const reset = (data) => {
  const { email } = data;
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const users = storedUsers.find((user) => user.email === email);
  console.log("3", JSON.stringify(storedUsers));
  if (!users) {
    return { status: false, msg: "Email not found." };
  }
  return {
    status: true,
    msg: "Password reset link sent!",
  };
};
