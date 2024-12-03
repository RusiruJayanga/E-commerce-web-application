import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./category.css";
import Category_page from "./category_page/Category_page";

const Category = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {/* Repeat start */}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {/* Repeat end */}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
        {}
        <div className="category-slider">
          <div className="category-slider-item">
            <img className="category-slider-item-img" src="men.jpg" alt="" />
            <div className="category-slider-item-dis">
              <h4>Men</h4> <p className="p">See more</p>
            </div>
          </div>
        </div>
        {}
      </Slider>
      {/* Category section */}
      <Category_page />
    </div>
  );
};

export default Category;
