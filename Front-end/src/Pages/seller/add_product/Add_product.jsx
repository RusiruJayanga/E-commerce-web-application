import React from "react";
import "./add_product.css";
import Footer from "../../../Components/footer/Footer";

const Add_product = () => {
  return (
    <div>
      {/* Add section */}
      <div className="product-add-con">
        <h3 className="text-hili">Send us a message</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          quae inventore reiciendis deserunt. Temporibus impedit quae aliquid
          fugit at maiores consectetur ipsum odio velit sunt cupiditate minus,
          modi numquam.
        </p>
        <form className="gap" action="#">
          <div className="product-add-input-box">
            <input typeof="text" placeholder="Enter your name"></input>
          </div>
          <div className="product-add-input-box">
            <input typeof="text" placeholder="Enter your name"></input>
          </div>
          <div className="product-add-input-box">
            <input typeof="text" placeholder="Enter your name"></input>
          </div>
          <div className="product-add-input-box">
            <input typeof="text" placeholder="Enter your name"></input>
          </div>
          <div className="product-add-input-box">
            <input typeof="text" placeholder="Enter your email"></input>
          </div>
          <div className="product-add-input-box product-add-message-box">
            <input typeof="text" placeholder="Message..."></input>
          </div>
          <button className="product-add-button">Send</button>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Add_product;
