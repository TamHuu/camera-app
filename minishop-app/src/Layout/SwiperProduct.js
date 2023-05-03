import React from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { Box } from "@mui/material";

SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/344682444_1230646241157191_6494314129047568869_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oZSs5hQXqboAX94zogv&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfA3PvLzqmvIMhKa1f9rM81tRHGVhOIMPGEq4FbXegnavQ&oe=64570351",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

const App = () => {
  return (
    <Box>
      <Swiper
      spaceBetween={2}
      slidesPerView={3}
     pagination={{
      type: "fraction",
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
        className="mySwiper"
      >
    
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default App;