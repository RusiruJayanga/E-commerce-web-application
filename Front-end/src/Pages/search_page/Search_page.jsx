import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search_page.css";

const Search_page = () => {
  const [searchQuery, setSearchQuery] = useState(""); // To store user input
  const [products, setProducts] = useState([]); // To store fetched products
  const navigate = useNavigate(); // For navigation

  // Handle input changes and fetch search results
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setProducts([]);
      return;
    }

    try {
      // Perform the API call
      const response = await axios.get(
        `http://localhost:3000/api/productssearch/search`,
        { params: { query } } // Pass query as URL parameters
      );

      // Update the products state with the response data
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setProducts([]);
    }
  };

  // Handle item click to navigate to product details page
  const handleProductClick = (productId) => {
    navigate(`/product_details`, { state: { productId } });
  };

  return (
    <div>
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search anything...!"
          className="search-box"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="search-icon" type="submit">
          <img className="search-icon-img" src="search-icon.png" alt="" />
        </button>
      </form>
      {products.length > 0 && (
        <div className="search-results">
          <ul>
            {products.map((product) => (
              <li
                key={product._id}
                className="search-result-item"
                onClick={() => handleProductClick(product._id)} // Navigate on click
              >
                <strong>{product.ProductName}</strong> - ${product.Price}
                <br />
                <small>{product.ShortDescription}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search_page;
