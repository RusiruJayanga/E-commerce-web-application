import React from "react";
import Search from "../../Components/search/Search/";
import Category_page from "../../Components/category/category_page/Category_page";
import Footer from "../../Components/footer/Footer";

const Search_page = () => {
  return (
    <div>
      {/* Search bar */}
      <Search />
      {/* Category section */}
      <Category_page />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Search_page;
