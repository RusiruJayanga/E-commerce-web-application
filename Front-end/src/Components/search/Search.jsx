import React from "react";
import "./search.css";

const Search = () => {
  return (
    <form className="search-bar" action="">
      <input
        type="text"
        placeholder="Search anything...!"
        className="search-box"
      ></input>
      <button className="search-icon">
        <img className="search-icon-img" src="search-icon.png" alt="" />
      </button>
    </form>
  );
};

export default Search;
