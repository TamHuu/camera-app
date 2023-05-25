import React, {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Box } from "@mui/material";
import { listDetailImage } from "./data";

export default function SwiperDetailImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(listDetailImage());
  }, []);

  return (
    <Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgba(0,0,0,.3)",
          "--swiper-pagination-color": "rgba(0,0,0,.3)",

        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box display='flex' justifyContent='center'>
              <img src={slide.image} alt="alt" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
             <Box display='flex' justifyContent='center' >
              <img src={slide.image} alt="alt" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
