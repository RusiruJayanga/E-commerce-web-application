import React from "react";
import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./Seller_signup.css";

const Geolocation = [
  { value: "Global", label: "Global" },
  { value: "Local", label: "Local" },
];

const Seller_signup = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      {/* Add section */}
      <div className="seller-signup-con">
        <h3 className="text-hili">Seller account Sign up</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          quae inventore reiciendis deserunt. Temporibus impedit quae aliquid
          fugit at maiores consectetur ipsum odio velit sunt cupiditate minus,
          modi numquam.
        </p>
        <form className="gap" action="#">
          <div className="seller-signup-input-box">
            <input type="text" placeholder="Company name"></input>
          </div>
          <div className="seller-signup-input-box">
            <input type="text" placeholder="Company email"></input>
          </div>
          <div className="seller-signup-input-box">
            <input type="text" placeholder="Company address"></input>
          </div>
          <div className="seller-signup-input-box">
            <input type="number" placeholder="Valid telephone number"></input>
          </div>
          <div className="seller-signup-input-box-select">
            <Select name="" placeholder="Geolocation" options={Geolocation} />
          </div>
          <div className="seller-signup-input-box seller-signup-message-box">
            <input
              type="text"
              placeholder="Enter small discription (Limit to 50 words)"
            ></input>
          </div>
          <div className="seller-signup-input-box">
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="seller-signup-input-box-image">
            <input
              className="seller-signup-input-box-image-input"
              type="file"
              onChange={handleChange}
            />
            <img className="seller-signup-input-image" src={file} />
          </div>
          <button className="seller-signup-button">Signup</button>
        </form>
        <Link to="/Seller_login">
          <p className="gap">You already have an account? please Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Seller_signup;
