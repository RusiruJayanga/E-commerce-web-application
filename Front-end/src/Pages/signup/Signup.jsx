import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div>
      {/* Signup section */}
      <div className="signup-con">
        <h3 className="text-hili">Sign up</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          quae inventore reiciendis deserunt. Temporibus impedit quae aliquid
          fugit at maiores consectetur ipsum odio velit sunt cupiditate minus,
          modi numquam.
        </p>
        <form className="gap" action="#">
          <div className="signup-input-box">
            <input type="text" placeholder="User name"></input>
          </div>
          <div className="signup-input-box">
            <input type="text" placeholder="User email"></input>
          </div>
          <div className="signup-input-box">
            <input type="text" placeholder="User address"></input>
          </div>
          <div className="signup-input-box">
            <input type="number" placeholder="Valid telephone number"></input>
          </div>
          <div className="signup-input-box">
            <input type="password" placeholder="Password"></input>
          </div>
          <button className="signup-button">Signup</button>
        </form>
        <Link to="/Login">
          <p className="gap">You already have an account? please Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
