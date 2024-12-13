import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./product_details.css";

const Product_details = () => {
  const [quantity, setQuantity] = useState(0);
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 50) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 50) {
      setQuantity(value);
    } else if (value < 0) {
      setQuantity(0);
    } else if (value > 50) {
      setQuantity(50);
    }
  };

  const location = useLocation();
  const { productId } = location.state || {};
  return (
    <div>
      <p>Product ID: {productId}</p>
      <section className="product-details-con">
        <div className="product-details-image-con">
          <img className="product-details-image" src="product.png" alt="" />
        </div>
        <div className="product-details-details">
          <h3 className="text-hili">Lorem ipsum dolor sitLorem </h3>
          <h4>short discription</h4>
          <p className="product-details-top">
            Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem
            ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem
            ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum
            dolor sitLorem ipsum dolor
          </p>
          <h4 className="product-details-top text-hili">$667788</h4>
          <div className="product-details-stepper">
            <button
              className="product-details-stepper-button button-left"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              className="product-details-stepper-input"
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min="0"
              max="50"
            />
            <button
              className="product-details-stepper-button button-right"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className="product-details-button">
            <button className="product-details-wish-button">
              <img
                className="product-details-wish-img"
                src="wish-list.png"
                alt=""
              />
            </button>
            <button className="product-details-cart-button">Add to cart</button>
          </div>
        </div>
      </section>
      {/* Chat Section */}
      <section className="product-chat-con">
        {/* repeat*/}
        <div className="product-chat">
          <p className="product-chat-lable-customer text-hili">
            <img className="product-chat-image" src="user-logo.png" alt="" />
            Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem
            ipsum dolor sitLorem ipsum dolor sitLorem
          </p>
          <p className="product-chat-lable-seller">
            Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem
            ipsum dolor sitLorem ipsum dolor sitLorem{" "}
            <img className="product-chat-image" src="brand-logo.jpg" alt="" />
          </p>
        </div>
        {/* repeat*/}
        <button className="product-chat-show-more-button">Show more</button>
        <input
          placeholder="Ask questions"
          className="product-chat-input"
          type="text"
        />
      </section>
    </div>
  );
};

export default Product_details;
