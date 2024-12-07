import React from "react";
import Search from "../../Components/search/Search/";
import Category_page from "../../Components/category/category_page/Category_page";

const Search_page = () => {
  return (
    <div>
      {/* Search bar */}
      <Search />
      {/* Category section */}
      <Category_page />
    </div>
  );
};

export default Search_page;
