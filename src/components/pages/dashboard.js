import React, { useEffect, useState } from "react";
import { logout } from "../../services/auth.service";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "",
    dob: "",
    mobileNo: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const currentUserEmail = localStorage.getItem("currentUser");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find((u) => u.email === currentUserEmail);
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) => (u.email === user.email ? user : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log(updatedUsers);
    alert("Profile Updated Successfully.");
  };
  return (
    <>
      <form onSubmit={handleUpdate}>
        <h2>Profile update </h2>
        <input name="name" value={user.name} onChange={handleChange} />
        <input name="dob" value={user.dob} onChange={handleChange} />
        <input name="mobileNo" value={user.mobileNo} onChange={handleChange} />
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          disabled
        />
        <button type="submit">Update Profile</button>
      </form>
      <p>
        <Link onClick={logout}>Logout</Link>
      </p>
    </>
  );
};

export default Dashboard;
