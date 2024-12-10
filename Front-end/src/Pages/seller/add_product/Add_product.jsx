import React, { useState } from "react";
import Select from "react-select";
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

const Add_product = () => {
  const [file, setFile] = useState();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
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

    if (!formData.advertise) {
      newErrors.advertise = "Please select an advertise option.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender option.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (!file) {
      newErrors.file = "Please upload an image.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData, file);
      // Submit form logic
    }
  };

  return (
    <div>
      {/* Add section */}
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
              onChange={(selected) =>
                handleSelectChange("advertise", selected.value)
              }
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
              onChange={(selected) =>
                handleSelectChange("gender", selected.value)
              }
            />
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}
          <div className="product-add-input-box-select">
            <Select
              placeholder="Category"
              options={Category}
              onChange={(selected) =>
                handleSelectChange("category", selected.value)
              }
            />
          </div>{" "}
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
          <button className="product-add-button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add_product;
