import React from "react";
import CarouselProduct from "./Carousel/Carousel";
import styles from "./styles.scss";
import banner_1 from "../../assets/product/carousel/banner_1.webp";
import banner_2 from "../../assets/product/carousel/banner_2.webp";
export default function Main() {
  return (
    <div className="main">
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-md-8">
            <CarouselProduct />
          </div>
          <div className="col-md-4">
            <div className="item-thumb-1">
              {" "}
              <img
                className="d-block w-100 "
                src={banner_1}
                alt="First slide"
              />
            </div>
            <div className="item-thumb-2">
              {" "}
              <img
                className="d-block w-100 "
                src={banner_2}
                alt="First slide"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
