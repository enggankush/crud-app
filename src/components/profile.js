import { useEffect, useState } from "react";
import { logout } from "../services/auth.service";
import { Link } from "react-router-dom";
import { getDummyUser } from "../services/api.service";

const Profile = () => {
  const [dummyUser, setDummyUser] = useState(null);
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
    getDummyUser().then((data) => {
      if (data) {
        console.log("Dummy API Data", data);
        setDummyUser(data);
      }
    });
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
    alert("Profile Updated Successfully.");
  };
  return (
    <>
      {(dummyUser && (
        <div>
          <h4>Dummy User:</h4>
          <p>
            Name: {dummyUser.firstName} {dummyUser.lastName}
          </p>
          <p>Age: {dummyUser.age}</p>
          <p>Phone: {dummyUser.phone}</p>
          <p>Email: {dummyUser.email}</p>
          <p>Password: {dummyUser.password}</p>
        </div>
      )) || (
        <>
          <form onSubmit={handleUpdate}>
            <input name="name" value={user.name} onChange={handleChange} />
            <input name="dob" value={user.dob} onChange={handleChange} />
            <input
              name="mobileNo"
              value={user.mobileNo}
              onChange={handleChange}
            />
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
      )}
    </>
  );
};

export default Profile;
