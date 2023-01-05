import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleIsLoggedIn } from "../../features/lendsqrSlice";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const [first, setfirst] = useState("password");

  const handleLogin = () => {
    setTimeout(() => {
      dispatch(handleIsLoggedIn(true));
    }, 2000);
  };
  return (
    <div id="loginBox">
      <div id="firstSec">
        <img id="loginLogo2" src="/logo.png" />

        <div
        
        >
          <img id="hero" src="/pablo-sign-in-1.svg" />
        </div>
      </div>

      <div id="secondSec">
        <div id="bigtextDiv">
          <h2 id="h21">Welcome!</h2>
          <p>Enter details to login.</p>
        </div>
        <div id="secBigtext">
          <input placeholder="Email" type={"email"} />
          <div id="secinpt">
            <input placeholder="Password" type={first} />
            {first === "password" ? (
              <p onClick={() => setfirst("text")}>SHOW</p>
            ) : (
              <p onClick={() => setfirst("password")}>HIDE</p>
            )}
          </div>
        </div>
        <p>FORGOT PASSWORD?</p>
        <button onClick={handleLogin}>LOG IN</button>
      </div>
    </div>
  );
}

export default Login;
