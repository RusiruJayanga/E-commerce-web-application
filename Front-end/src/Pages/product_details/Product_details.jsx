import React from "react";
import "./product_details.css";

const Product_details = () => {
  return (
    <div>
      <section className="product_details-con">
        <img className="product_details-image" src="product.png" alt="" />
        <div className="product_details-details">
          <h3 className="text-hili">Lorem ipsum dolor sitLorem </h3>
          <h4>$667788</h4>
          <p className="product_details-top">
            Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem
            ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit Lorem
            ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum
            dolor sitLorem ipsum dolor
          </p>
          <li className="product_details-list text-hili product_details-top">
            Lorem ipsum dolor sitLorem ipsum
          </li>
          <li className="product_details-list text-hili">
            Lorem ipsum dolor sitLorem ipsum
          </li>
          <li className="product_details-list text-hili">
            Lorem ipsum dolor sitLorem ipsum
          </li>
          <div className="product_details-button">
            <button className="product_details-wish-button">
              <img
                className="product_details-wish-img"
                src="wish-list.png"
                alt=""
              />
            </button>
            <button className="product_details-cart-button">Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product_details;
