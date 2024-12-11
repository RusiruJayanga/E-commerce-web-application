import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import "./add_product.css";

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

const AddProduct = () => {
  const [file, setFile] = useState(null);
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
  const [filePreview, setFilePreview] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedFileTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          file: "Please upload a valid image file.",
        }));
        return;
      }
      setFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required.";
    }

    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = "Short description is required.";
    } else if (formData.shortDescription.length > 25) {
      newErrors.shortDescription =
        "Short description must not exceed 25 characters.";
    }

    if (!formData.longDescription.trim()) {
      newErrors.longDescription = "Long description is required.";
    } else if (formData.longDescription.length > 100) {
      newErrors.longDescription =
        "Long description must not exceed 100 characters.";
    }

    if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
      newErrors.price = "Please enter a valid price.";
    }

    if (
      !formData.discount ||
      isNaN(formData.discount) ||
      formData.discount < 0 ||
      formData.discount > 100
    ) {
      newErrors.discount = "Please enter a valid discount (0-100%).";
    }

    if (
      !formData.quantity ||
      isNaN(formData.quantity) ||
      formData.quantity <= 0
    ) {
      newErrors.quantity = "Please enter a valid quantity.";
    }

    if (!formData.advertise?.value) {
      newErrors.advertise = "Please select an advertise option.";
    }

    if (!formData.gender?.value) {
      newErrors.gender = "Please select a gender option.";
    }

    if (!formData.category?.value) {
      newErrors.category = "Please select a category.";
    }

    if (!file) {
      newErrors.file = "Please upload an image.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

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
    formDataToSend.append("productimage", file);

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/ecommerceproduct/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert("Product added successfully!");
        setFormData({
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
        setFile(null);
        setFilePreview(null);
        setErrors({});
      } else {
        alert(response.data.message || "Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="product-add-con">
        <h3 className="text-hili">Add a Product</h3>
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
              placeholder="Enter long description (Limit to 100 characters)"
            />
            <p className="char-count">
              {formData.longDescription.length}/100 characters
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
            {loading ? "Adding..." : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
