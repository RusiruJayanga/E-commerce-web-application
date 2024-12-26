import React, { useState, useEffect } from "react";
import axios from "axios";
import "./account.css";

const Account = () => {
  const customerId = localStorage.getItem("customerId");
  const [customer, setcustomer] = useState(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/customeraccount/${customerId}`
        );
        setcustomer(response.data);
      } catch (error) {
        console.error("Error fetching seller details:", error);
      }
    };

    if (customerId) {
      fetchCustomerDetails();
    }
  }, [customerId]);

  return (
    <div>
      {customer ? (
        <div className="seller-profile-con">
          <img className="seller-profile-image" src="user-logo.png" />
          <div className="seller-profile-detail-con">
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Customer ID :
              </h5>
              <p className="seller-profile-p">{customer._id}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Customer Name :
              </h5>
              <p className="seller-profile-p">{customer.CustomerName}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Customer Email :
              </h5>
              <p className="seller-profile-p">{customer.CustomerEmail}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Customer Address :
              </h5>
              <p className="seller-profile-p">{customer.CustomerAddress}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Customer PhoneNumber :
              </h5>
              <p className="seller-profile-p">{customer.CustomerPhoneNumber}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading seller details...</p>
      )}
    </div>
  );
};

export default Account;
