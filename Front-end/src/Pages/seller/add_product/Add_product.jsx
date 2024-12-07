import React from "react";
import { useState } from "react";
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
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      {/* Add section */}
      <div className="product-add-con">
        <h3 className="text-hili">Send us a message</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          quae inventore reiciendis deserunt. Temporibus impedit quae aliquid
          fugit at maiores consectetur ipsum odio velit sunt cupiditate minus,
          modi numquam.
        </p>
        <form className="gap" action="#">
          <div className="product-add-input-box">
            <input type="text" placeholder="Enter product name"></input>
          </div>
          <div className="product-add-input-box">
            <input
              type="text"
              placeholder="Enter short discription (Limit to 6 words)"
            ></input>
          </div>
          <div className="product-add-input-box product-add-message-box">
            <input
              type="text"
              placeholder="Enter long discription (Limit to 50 words)"
            ></input>
          </div>
          <div className="product-add-input-box">
            <input type="number" placeholder="Price"></input>
          </div>
          <div className="product-add-input-box">
            <input type="number" placeholder="Discount (%)"></input>
          </div>
          <div className="product-add-input-box-select">
            <Select name="" placeholder="Advertise" options={Advertise} />
          </div>
          <div className="product-add-input-box">
            <input type="number" placeholder="Quantity"></input>
          </div>
          <div className="product-add-input-box-select">
            <Select name="" placeholder="For who" options={Gender} />
          </div>
          <div className="product-add-input-box-select">
            <Select name="" placeholder="Category" options={Category} />
          </div>
          <div className="product-add-input-box-image">
            <input
              className="product-add-input-box-image-input"
              type="file"
              onChange={handleChange}
            />
            <img className="product-add-input-image" src={file} />
          </div>
          <button className="product-add-button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add_product;
