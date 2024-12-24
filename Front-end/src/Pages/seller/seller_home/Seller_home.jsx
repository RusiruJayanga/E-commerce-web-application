import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./seller_home.css";
import { Delete } from "../../../Components/Modules/seller_product_delete/Seller_product_delete";
import { Edit } from "../../../Components/Modules/seller_product_edit/Seller_product_edit";

const Seller_home = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editOpen, editModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sellerID = localStorage.getItem("sellerId"); // Retrieve SellerID from localStorage
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/productssellerdisplay?sellerID=${sellerID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (sellerID) {
      fetchProducts();
    }
  }, [sellerID]);

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/productsdelete/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      const result = await response.json();
      console.log(result.message);
      // "Product deleted successfully"

      // Update front-end state to reflect deletion
      setProducts(products.filter((product) => product._id !== productId));
      setModalOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div className="all-product-container">
        <div className="all-product-tbl_content">
          <table className="all-product-tbl">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      className="seller-home-table-image"
                      src={
                        `http://localhost:3000/uploads/${product.ImageFile}` ||
                        "product.png"
                      }
                      alt={product.ProductName}
                    />
                  </td>
                  <td data-label="Product Name">{product.ProductName}</td>
                  <td data-label="Quantity">{product.Quantity}</td>
                  <td data-label="Price">${product.Price}</td>
                  <td data-label="Status">
                    {product.Quantity === 0
                      ? "No Stock"
                      : product.Quantity < 5
                      ? "Low Stock"
                      : "On Stock"}
                  </td>
                  <td data-label="Edit">
                    <button
                      className="all-product-btn_edit"
                      onClick={() => {
                        setSelectedProduct(product);
                        editModalOpen(true);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td data-label="Delete">
                    <button
                      className="all-product-btn_trash"
                      onClick={() => {
                        setSelectedProduct(product);
                        setModalOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editOpen &&
        createPortal(
          <Edit
            closeModal={() => editModalOpen(false)}
            product={selectedProduct}
          />,
          document.body
        )}

      {/* Delete Modal */}
      {modalOpen &&
        createPortal(
          <Delete
            closeModal={() => setModalOpen(false)}
            onSubmit={() => handleDelete(selectedProduct._id)}
          />,
          document.body
        )}
    </div>
  );
};

export default Seller_home;
