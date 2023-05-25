import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "react-responsive";
import { ListProducts } from "../../../../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.css";
import { Mousewheel, FreeMode, Autoplay } from "swiper";

// import required modules

SwiperCore.use([Navigation, Pagination]);

const Wrapper = styled.div`
  padding: 20px 0;

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }

  .swiper-pagination-bullet {
    background-color: white;
  }
`;

export default function SwiperProduct() {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const [slides, setSlides] = React.useState([]);
  React.useEffect(() => {
    setSlides(ListProducts());
  }, []);

  return (
    <Wrapper>
      <Swiper
        loop={true}
        modules={[Mousewheel, FreeMode, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={isSmallScreen ? 1 : 4}
        spaceBetween={isSmallScreen ? 0 : 20}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <img src={slide.image} alt="alt" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
