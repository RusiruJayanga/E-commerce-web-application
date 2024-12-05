import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div>
      {/* Customer login section */}
      <div className="login-con">
        <h3 className="text-hili">Log in</h3>
        <form className="gap" action="#">
          <div className="login-input-box">
            <input type="text" placeholder="Company email"></input>
          </div>
          <div className="login-input-box">
            <input type="password" placeholder="Password"></input>
          </div>
          <button className="login-button">Login</button>
        </form>
        <Link to="/Signup">
          <button className="signup-button">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
