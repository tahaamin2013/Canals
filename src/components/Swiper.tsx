import React from "react";
import SwiperCore, {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

export const MySwiper = () => {
  return (
    <main>
      <Swiper
        className="h-screen"
        onSwiper={(swiper) => ((window as any).swiper = swiper)}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        loop
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        fadeEffect={{ crossFade: true }}
        effect="fade"
        speed={1000}
      >
        <SwiperSlide>
          <div className="w-100 h-screen bg-blue-700"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 h-screen bg-green-700"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 h-screen bg-teal-800"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 h-screen bg-violet-900"></div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};
