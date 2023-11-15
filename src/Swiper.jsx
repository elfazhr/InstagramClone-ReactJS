// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Swipper = () => {
  return (
    <Swiper
      className="swiper-wrapper"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="swiper-slide">
        <img src="image/post/1.jpg" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="image/post/2.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipper;
