import React from "react";
import styles from "./styles.module.scss";
import banner_1 from "../../assets/product/carousel/banner_1.webp";
import banner_2 from "../../assets/product/carousel/banner_2.webp";
import { CarouselProduct, CarouselService } from "./Carousel/Carousel";
export default function Main() {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <CarouselProduct />
          </div>
          <div className="col-md-4">
            <div className={styles.item_thumb_1}>
              {" "}
              <img
                className="d-block w-100 "
                src={banner_1}
                alt="First slide"
              />
            </div>
            <div className="item_thumb_2">
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
      <div className={styles.section_service}>
        <CarouselService />
      </div>
    </div>
  );
}
