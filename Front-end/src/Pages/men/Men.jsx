import React from "react";
import "./men.css";
import Footer from "../../Components/footer/Footer";
import Category from "../../Components/category/Category";
import Search from "../../Components/search/Search";

const Men = () => {
  return (
    <div>
      {/* Section men */}
      <section className="section-men"></section>
      {/* Search bar */}
      <Search />
      {/* Category section */}
      <Category />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Men;
