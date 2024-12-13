import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import "../add_product/add_product.css";

const Advertise = [
  { value: "None", label: "None" },
  { value: "Hot", label: "Hot" },
  { value: "Offers", label: "Offers" },
];
const Gender = [
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
  { value: "Unisex", label: "Unisex" },
];
const Category = [
  { value: "Clothes", label: "Clothes" },
  { value: "Shoes", label: "Shoes" },
  { value: "Watches", label: "Watches" },
  { value: "Perfume", label: "Perfume" },
  { value: "Hats", label: "Hats" },
  { value: "Wallets", label: "Wallets" },
  { value: "Hand_Bags", label: "Hand Bags" },
  { value: "Cargo_Bags", label: "Cargo Bags" },
  { value: "Slippers", label: "Slippers" },
];

const EditProduct = () => {
  const productId = localStorage.getItem("editProductId");
  const [formData, setFormData] = useState({
    productName: "",
    shortDescription: "",
    longDescription: "",
    price: "",
    discount: "",
    quantity: "",
    advertise: null,
    gender: null,
    category: null,
  });
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Remove the useEffect hook that was loading the product details

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, selected) => {
    setFormData({ ...formData, [name]: selected });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sellerId = localStorage.getItem("sellerId");
    if (!sellerId) {
      alert("Seller ID is missing. Please login again.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("SellerID", sellerId);
    formDataToSend.append("ProductName", formData.productName);
    formDataToSend.append("ShortDescription", formData.shortDescription);
    formDataToSend.append("LongDescription", formData.longDescription);
    formDataToSend.append("Price", formData.price);
    formDataToSend.append("Discount", formData.discount);
    formDataToSend.append("Advertise", formData.advertise?.value || "");
    formDataToSend.append("Quantity", formData.quantity);
    formDataToSend.append("ForWho", formData.gender?.value || "");
    formDataToSend.append("Category", formData.category?.value || "");
    if (file) {
      formDataToSend.append("productimage", file);
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:3000/api/ecommerceproductedit/update/${productId}`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        alert("Product updated successfully!");
        localStorage.removeItem("editProductId"); // Remove editProductId from localStorage
      } else {
        alert(response.data.message || "Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("An error occurred while updating the product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="product-add-con">
        <h3 className="text-hili">Edit Product</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          quae inventore reiciendis deserunt.
        </p>
        <form className="gap" onSubmit={handleSubmit}>
          <div className="product-add-input-box">
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Enter product name"
            />
            {errors.productName && (
              <p className="error">{errors.productName}</p>
            )}
          </div>
          <div className="product-add-input-box">
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleInputChange}
              placeholder="Enter short description (Limit to 25 characters)"
            />
            <p className="char-count">
              {formData.shortDescription.length}/25 characters
            </p>
            {errors.shortDescription && (
              <p className="error">{errors.shortDescription}</p>
            )}
          </div>
          <div className="product-add-input-box product-add-message-box margin-top-add">
            <input
              type="text"
              name="longDescription"
              value={formData.longDescription}
              onChange={handleInputChange}
              placeholder="Enter long description (Limit to 250 characters)"
            />
            <p className="char-count">
              {formData.longDescription.length}/250 characters
            </p>
            {errors.longDescription && (
              <p className="error">{errors.longDescription}</p>
            )}
          </div>
          <div className="product-add-input-box margin-top-add">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>
          <div className="product-add-input-box">
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              placeholder="Discount (%)"
            />
            {errors.discount && <p className="error">{errors.discount}</p>}
          </div>
          <div className="product-add-input-box-select">
            <Select
              placeholder="Advertise"
              options={Advertise}
              value={formData.advertise}
              onChange={(selected) => handleSelectChange("advertise", selected)}
            />
          </div>
          {errors.advertise && <p className="error">{errors.advertise}</p>}
          <div className="product-add-input-box">
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
            />
            {errors.quantity && <p className="error">{errors.quantity}</p>}
          </div>
          <div className="product-add-input-box-select">
            <Select
              placeholder="For who"
              options={Gender}
              value={formData.gender}
              onChange={(selected) => handleSelectChange("gender", selected)}
            />
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}
          <div className="product-add-input-box-select">
            <Select
              placeholder="Category"
              options={Category}
              value={formData.category}
              onChange={(selected) => handleSelectChange("category", selected)}
            />
          </div>
          {errors.category && <p className="error">{errors.category}</p>}
          <div className="product-add-input-box-image">
            <input
              className="product-add-input-box-image-input"
              type="file"
              onChange={handleFileChange}
            />
            {filePreview && (
              <img
                className="product-add-input-image"
                src={filePreview}
                alt="Preview"
              />
            )}
            {errors.file && <p className="error">{errors.file}</p>}
          </div>
          <button className="product-add-button" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
