import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Components/category/category.css";
import "../../Components/category/category_page/category_page.css";

const categories = [
  "Clothes",
  "Shoes",
  "Watches",
  "Perfume",
  "Hats",
  "Wallets",
  "Hand Bags",
  "Cargo Bags",
  "Slippers",
];

const Hot = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  // Fetch products from back-end
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/productsdisplayhot${
            selectedCategory ? `?category=${selectedCategory}` : ""
          }`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleCardClick = (productId) => {
    navigate(`/Product_details`, { state: { productId } });
  };

  const [visibleProduct, setVisibleProduct] = useState(4); // Initially show 4 products

  // Show more products
  const showMoreProduct = () => {
    setVisibleProduct((prev) => prev + 4);
  };

  return (
    <div>
      {/* Category Slider Section */}
      <Slider {...sliderSettings}>
        {categories.map((category, idx) => (
          <div
            className={`category-slider ${
              selectedCategory === category ? "active" : ""
            }`}
            key={`category-${idx}`}
            onClick={() =>
              setSelectedCategory(
                category === selectedCategory ? null : category
              )
            }
          >
            <div className="category-slider-item">
              <img
                className="category-slider-item-img"
                src={`${category.toLowerCase()}.jpg`}
                alt={category}
              />
              <div className="category-slider-item-dis">
                <h4>{category}</h4>
                <p className="p">See more</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Product Card Section */}
      <div className="grid-container">
        {products.slice(0, visibleProduct).map((product) => (
          <article
            className={`card ${product.Advertise === "Hot" ? "hot" : ""} ${
              product.Advertise === "Offers" ? "offers" : ""
            }`}
            key={product._id}
            onClick={() => handleCardClick(product._id)}
          >
            <div className="card-brand">
              <div>
                <img
                  src={`http://localhost:3000/uploads/${product.SellerID.LogoImageFile}`}
                  alt={product.brand}
                />
              </div>
              <div className="name">
                <h4>{product.SellerID.SellerName}</h4>
              </div>
            </div>
            <div className="card-image">
              <img
                src={`http://localhost:3000/uploads/${product.ImageFile}`}
                alt={product.ProductName}
              />
            </div>
            <div className="card-info">
              <div className="name">
                <h4>{product.ProductName}</h4>
              </div>
              <p>{product.ShortDescription}</p>
            </div>
            <div className="card-more">
              <div className="card-options">
                <label htmlFor="">Price - </label>
                <label htmlFor="">
                  ${product.Price - (product.Price * product.Discount) / 100}
                </label>
              </div>
              <div className="buttons">
                <button className="card-wish-button">
                  <img
                    className="card-wish-img"
                    src="wish-list.png"
                    alt="wishlist"
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {visibleProduct < products.length && (
        <button className="show-more-button" onClick={showMoreProduct}>
          Show more
        </button>
      )}
    </div>
  );
};

export default Hot;
