import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import axios from "axios";
import "./product_details.css";
import { Questions } from "../../Components/Modules/product_details_questions/Product_details_questions";

const Product_details = () => {
  const [noofelement, setnoofelement] = useState(4);
  const showmore = () => {
    setnoofelement(noofelement + noofelement);
  };
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
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
    if (!isNaN(value) && value >= 1 && value <= 50) {
      setQuantity(value);
    } else if (value < 1) {
      setQuantity(1);
    } else if (value > 50) {
      setQuantity(50);
    }
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };
  const location = useLocation();
  const { productId } = location.state || {};
  const [product, setProduct] = useState(null);
  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/productsdetailsdisplay/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    const customerId = localStorage.getItem("customerId");

    if (!token) {
      alert("Please login to add items to the cart.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/pendingcart/pendingcartadd",
        {
          CustomerID: customerId,
          ProductID: productId,
          Quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  const handleAddToWishList = async () => {
    const token = localStorage.getItem("token");
    const customerId = localStorage.getItem("customerId");

    if (!token) {
      alert("Please login to add items to wish list.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/wishlist/wishlistadd",
        {
          CustomerID: customerId,
          ProductID: productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Item added to wish list successfully!");
    } catch (error) {
      console.error("Error adding item to  wish list:", error);
      alert("Failed to add item to  wish list. Please try again.");
    }
  };
  // const slice = qustions.slice(0, noofelement);
  return (
    <div>
      {product ? (
        <section className="product-details-con">
          <div className="product-details-image-con">
            <img
              className="product-details-image"
              src={`http://localhost:3000/uploads/${product.ImageFile}`}
              alt={product.ProductName}
            />
          </div>
          <div className="product-details-details">
            <h3 className="text-hili">{product.ProductName}</h3>
            <h4>{product.ShortDescription}</h4>
            <p className="product-details-top">{product.LongDescription}</p>
            <h4 className="product-details-top text-hili">${product.Price}</h4>
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
                min="1"
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
              <button
                className="product-details-wish-button"
                onClick={handleAddToWishList}
              >
                <img
                  className="product-details-wish-img"
                  src="wish-list.png"
                  alt="Add to Wishlist"
                />
              </button>
              <button
                className="product-details-cart-button"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading product details...</p>
      )}
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
        <button
          className="product-chat-show-more-button"
          onClick={() => showmore()}
        >
          Show more
        </button>
        <button
          className="product-chat-input"
          onClick={() => setModalOpen(true)}
        >
          Ask questions
        </button>
        {modalOpen &&
          createPortal(
            <Questions
              closeModal={handleButtonClick}
              onSubmit={handleButtonClick}
              onCancel={handleButtonClick}
              productId={productId}
            ></Questions>,
            document.body
          )}
      </section>
    </div>
  );
};

export default Product_details;
