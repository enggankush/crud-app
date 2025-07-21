import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/userLogin";
import UserSignup from "./components/userSignup";
import UserResetPass from "./components/userResetPass";
import Profile from "./components/profile";
import Dashboard from "./components/pages/dashboard";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="container">
                  {" "}
                  <UserLogin />
                </div>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/signup"
              element={
                <div className="container">
                  <UserSignup />
                </div>
              }
            />
            <Route
              path="/reset-pass"
              element={
                <div className="container">
                  <UserResetPass />
                </div>
              }
            />
            <Route
              path="/profile"
              element={
                <div className="container">
                  <Profile />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
