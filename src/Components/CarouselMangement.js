import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./components.css";

// import required modules
import { FreeMode } from "swiper";

export default function CarouselMangement() {
  const data = [
    {
      'image': 'https://i.ibb.co/BCXZY2C/img01.jpg',
      'service': 'Finance Managment'
    },
    {
      'image': 'https://i.ibb.co/xqM8w1n/img02.jpg',
      'service': 'Business Managment'
    },
    {
      'image': 'https://i.ibb.co/Qp004bP/img03.jpg',
      'service': 'Finance Managment'
    },
    {
      'image': 'https://i.ibb.co/BCXZY2C/img01.jpg',
      'service': 'Business Managment'
    },
    {
      'image': 'https://i.ibb.co/xqM8w1n/img02.jpg',
      'service': 'Finance Managment'
    },
    {
      'image': 'https://i.ibb.co/Qp004bP/img03.jpg',
      'service': 'Business Managment'
    },
  ]
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[FreeMode]}
        className="mySwiper grid grid-cols-1 lg:grid-cols-3"
      >
        {
          data.map((d, index) =>
            <SwiperSlide>
              <img src={d.image} alt="" />
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
