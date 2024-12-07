import React from "react";
import "./home.css";
import Category from "../../Components/category/Category";
import Category_page from "../../Components/category/category_page/Category_page";

const Home = () => {
  return (
    <div>
      {/* Img section 1 */}
      <section className="section-image home-bg1">
        <div className="section-image-left">
          <div>
            <h4>Lorem ipsum dolor sit </h4>
            <h1>BLACK FRIDAY</h1>
            <p>
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
            </p>
            <button className="section-image-button">Shop Now</button>
          </div>
        </div>
        <div className="section-image-right">
          <img
            className="section-image-img"
            src="section1-right-img.png"
            alt=""
          />
        </div>
      </section>
      {/* Category section */}
      <Category />
      {/* Img section 2 */}
      <section className="section-image home-bg2">
        <div className="section-image-left">
          <div>
            <h4>Lorem ipsum dolor sit </h4>
            <h1>BLACK FRIDAY</h1>
            <p>
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
            </p>
          </div>
        </div>
        <div className="section-image-right">
          <img
            className="section-image-img"
            src="section1-right-img.png"
            alt=""
          />
        </div>
      </section>
      {/* Category section */}
      <Category_page />
      {/* Dit section */}
      <section className="section2">
        <div className="section2-card">
          <img className="section2-img" src="section2-main-bg.jpeg" alt="" />
          <div className="section2-dis">
            <h4 className="section2-dis-head text-hili">Lorem ipsum dolor</h4>
            <p className="section2-dis-text">
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
              Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor
              sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit
            </p>
            <ul className="section2-dis-li">
              <li>Lorem ipsum dolor sitLorem </li>
              <li>Lorem ipsum dolor sitLorem </li>
              <li>Lorem ipsum dolor sitLorem </li>
              <li>Lorem ipsum dolor sitLorem </li>
              <li>Lorem ipsum dolor sitLorem </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
