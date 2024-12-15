import React from "react";
import "./account.css";

const Account = () => {
  return (
    <div>
      <div className="account-details-con">
        <img className="account-details-image" src="user-logo.png" alt="" />
        <div className="account-details-details">
          <h4 className="account-details-content text-hili">Name :</h4>
          <h5 className="account-details-content">Email :</h5>
          <h5 className="account-details-content">Address :</h5>
          <h5 className="account-details-content">Phone Number :</h5>
        </div>
      </div>
    </div>
  );
};

export default Account;
