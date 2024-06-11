import "./Auth.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { register } from "../../helpers/Auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [moodleIdInput, setMoodleIdInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (passwordInput !== confirmPasswordInput) {
      console.log("Passwords do not match");
      return;
    }

    /*console.log(
      moodleIdInput,
      firstNameInput,
      lastNameInput,
      emailInput,
      passwordInput
    );*/
    const registerData = await register(
      moodleIdInput,
      firstNameInput,
      lastNameInput,
      emailInput,
      passwordInput
    );
    console.log(registerData);
    if (registerData.id !== undefined) {
      console.log("Registered successfully");
      navigate("/Login");
    }
  };

  return (
    <>
      <div className="login">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="login-container">
          <h1 className="title">Register</h1>
          <p className="subtitle">
            Register with your Moodle ISEP Credentials (ex: exam12345)
          </p>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Moodle ID"
            value={moodleIdInput}
            onChange={(e) => setMoodleIdInput(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered"
            placeholder="First Name"
            value={firstNameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered"
            placeholder="Last Name"
            value={lastNameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
          />
          <input
            type="email"
            className="input input-bordered"
            placeholder="Email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <input
            type="password"
            className="input input-bordered"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <input
            type="password"
            className="input input-bordered"
            placeholder="Confirm Password"
            value={confirmPasswordInput}
            onChange={(e) => setConfirmPasswordInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}
