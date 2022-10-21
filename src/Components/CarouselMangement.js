import React, { useRef, useState } from "react";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
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
              <div className="">
                <img src={d.image} alt="" />
                <div className="mt-[-100px] ml-2 pt-3 lg:ml-10 w-full h-[100px]">
                  <p className="text-sm lg:text-lg lg:font-semibold text-white text-left hover:text-primary"><HorizontalRuleIcon /> Consultant</p>
                  <h2 className="text-xl lg:text-3xl lg:font-bold text-white text-left hover:text-primary">{d.service}</h2>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
