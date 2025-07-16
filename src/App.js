import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/userLogin";
import UserSignup from "./components/userSignup";
import UserResetPass from "./components/userResetPass";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/reset-pass" element={<UserResetPass />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
