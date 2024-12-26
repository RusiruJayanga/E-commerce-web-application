import React, { useState, useEffect } from "react";
import axios from "axios";
import "./seller_profile.css";

const Seller_profile = () => {
  const sellerId = localStorage.getItem("sellerId");
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/selleraccount/${sellerId}`
        );
        setSeller(response.data);
      } catch (error) {
        console.error("Error fetching seller details:", error);
      }
    };

    if (sellerId) {
      fetchSellerDetails();
    }
  }, [sellerId]);

  return (
    <div>
      {seller ? (
        <div className="seller-profile-con">
          <img
            className="seller-profile-image"
            src={`http://localhost:3000/uploads/${seller.LogoImageFile}`}
            alt={seller.LogoImageFile}
          />
          <div className="seller-profile-detail-con">
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Seller ID :
              </h5>
              <p className="seller-profile-p">{seller._id}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Seller Name :
              </h5>
              <p className="seller-profile-p">{seller.SellerName}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Seller Email :
              </h5>
              <p className="seller-profile-p">{seller.SellerEmail}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Seller Address :
              </h5>
              <p className="seller-profile-p">{seller.SellerAddress}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Seller PhoneNumber :
              </h5>
              <p className="seller-profile-p">{seller.SellerPhoneNumber}</p>
            </div>
            <div className="seller-profile-detail">
              <h5 className="seller-profile-topic" htmlFor="">
                Geolocation :
              </h5>
              <p className="seller-profile-p">{seller.SellerGeolocation}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading seller details...</p>
      )}
    </div>
  );
};

export default Seller_profile;
