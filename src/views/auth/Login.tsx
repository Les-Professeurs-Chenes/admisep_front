import "./Auth.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { login } from "../../helpers/Auth";

export default function Login() {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = async () => {
    console.log(loginInput, passwordInput);
    const loginData = await login(loginInput, passwordInput);
    console.log(loginData);
    if (loginData.id !== undefined) {
      console.log("Logged in");
    }
  };

  return (
    <>
      <div className="login">
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="login-container">
          <h1 className="title">Login</h1>
          <p className="subtitle">
            Login with your Moodle ISEP Credentials (ex: exam12345){" "}
          </p>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Username"
            value={loginInput}
            onChange={(e) => setLoginInput(e.target.value)}
          />
          <input
            type="password"
            className="input input-bordered"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
