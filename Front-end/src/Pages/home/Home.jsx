import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Components/category/category.css";
import "../../Components/category/category_page/category_page.css";
import "./home.css";

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

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  // Fetch products from back-end
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/productsdisplay${
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

  const [visibleProduct, setVisibleProduct] = useState(4); // Initially show 4 questions

  // Show more questions
  const showMoreProduct = () => {
    setVisibleProduct((prev) => prev + 4);
  };

  return (
    <div>
      {/* Img section 1 */}
      <section className="section-image home-bg1">
        <div className="section-image-left">
          <div>
            <h4 className="text-hili">LOWEST PRICES OF THE YEAR</h4>
            <h1>BLACK FRIDAY</h1>
            <p>It's Black Friday. Yes, we are shopping more than ever!</p>
            <button className="section-image-button">Shop Now</button>
          </div>
        </div>
        <div className="section-image-right">
          <img
            className="section-image-img"
            src="section1-right-img.png"
            alt=""
          />
        </div>
      </section>
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

      {/* Img section 2 */}
      <section className="section-image home-bg2">
        <div className="section-image-right">
          <img
            className="section-image-img section2-right-img"
            src="section2-right-img.png"
            alt=""
          />
        </div>
        <div className="section-image-left">
          <div>
            <h4 className="text-hili">MENSWEAR BRAND</h4>
            <h1>Ultimate FASHION</h1>
            <p>Style That Speaks Elevate Your Elegance</p>
          </div>
        </div>
      </section>
      {/* Dit section */}
      <section className="section2">
        <div className="section2-card">
          <img className="section2-img" src="section3-main-bg.jpeg" alt="" />
          <div className="section2-dis">
            <h4 className="section2-dis-head text-hili">Green Shopping</h4>
            <p className="section2-dis-text">
              Step into a world of luxury, elegance, and exclusivity with us,
              the premier high-end fashion e-commerce platform. We bring you a
              curated selection of the finest designer clothing, accessories,
              and footwear from the most prestigious brands around the world.
            </p>
            <ul className="section2-dis-li">
              <li>
                Exclusive Designer Collections – Handpicked luxury fashion from
                renowned designers.
              </li>
              <li>
                Unparalleled Quality – Premium fabrics, exquisite craftsmanship,
                and timeless elegance.
              </li>
              <li>
                Seamless Shopping Experience – Intuitive interface, secure
                transactions, and fast delivery.
              </li>
              <li>
                Personalized Styling Services – Get expert fashion advice
                tailored to your taste.
              </li>
              <li>
                VIP Membership & Rewards – Enjoy early access to new
                collections, special discounts, and more!
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
