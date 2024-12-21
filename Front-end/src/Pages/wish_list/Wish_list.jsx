import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./wish_list.css";

const Wish_list = () => {
  const [wishlist, setWishlist] = useState([]);
  const customerId = localStorage.getItem("customerId");
  const navigate = useNavigate();

  // Fetch wishlist data
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/wishlistdisplay/${customerId}`
        );
        setWishlist(response.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    fetchWishlist();
  }, [customerId]);

  // Delete wishlist item
  const handleDelete = async (wishlistId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/wishlistdisplay/${wishlistId}`
      );
      setWishlist((prev) => prev.filter((item) => item._id !== wishlistId));
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
    }
  };
  const handleWishClick = (productId) => {
    navigate(`/Product_details`, { state: { productId } });
  };

  return (
    <div>
      <div className="wish-container">
        <div className="wish-tbl_content">
          <table className="wish-tbl">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Discount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.length > 0 ? (
                wishlist.map((item) => (
                  <tr key={item._id}>
                    <td
                      data-label="Image"
                      onClick={() => handleWishClick(item.ProductID._id)}
                    >
                      <img
                        className="wish-image"
                        src={`http://localhost:3000/uploads/${item.ProductID.ImageFile}`}
                        alt={item.ProductID.ProductName}
                      />
                    </td>
                    <td
                      data-label="Name"
                      onClick={() => handleWishClick(item.ProductID._id)}
                    >
                      {item.ProductID.ProductName}{" "}
                    </td>
                    <td
                      data-label="Price"
                      onClick={() => handleWishClick(item.ProductID._id)}
                    >
                      $
                      {(
                        item.ProductID.Price -
                        (item.ProductID.Price * item.ProductID.Discount) / 100
                      ).toFixed(2)}
                    </td>
                    <td
                      data-label="Discount"
                      onClick={() => handleWishClick(item.ProductID._id)}
                    >
                      {item.ProductID.Discount}%
                    </td>
                    <td data-label="Actions">
                      <button
                        className="wish-btn trash"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No items in your wish list.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wish_list;
