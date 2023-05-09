import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useMediaQuery } from 'react-responsive';
import { ListProducts } from '../data';

SwiperCore.use([Navigation, Pagination]);

const Wrapper = styled.div`
  padding: 20px;

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
        navigation
        pagination={{ clickable: true }}
        slidesPerView={isSmallScreen ? 1 : 4}
        spaceBetween={isSmallScreen ? 0 : 20}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div >
           
             <img src={slide.image} alt='alt'/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
