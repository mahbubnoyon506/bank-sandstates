import React, { useRef, useState } from "react";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bgShadow from '../assets/images/text-bg-folio.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./components.css";

// import required modules
import { FreeMode } from "swiper";
import zIndex from "@mui/material/styles/zIndex";
import { IoIosEye } from "react-icons/io";



export default function CarouselMangement() {

  const [show, setShow] = useState(false)

  const data = [
    {
      'image': 'https://i.ibb.co/BCXZY2C/img01.jpg',
      'title': 'Cunsultancy',
      'service': 'Finance Managment',


    },
    {
      'image': 'https://i.ibb.co/xqM8w1n/img02.jpg',
      'title': 'Cunsultancy',
      'service': 'Business Managment'

    },
    {
      'image': 'https://i.ibb.co/Qp004bP/img03.jpg',
      'title': 'Cunsultancy',
      'service': 'Finance Managment'

    },
    {
      'image': 'https://i.ibb.co/BCXZY2C/img01.jpg',
      'title': 'Cunsultancy',
      'service': 'Business Managment'

    },
    {
      'image': 'https://i.ibb.co/xqM8w1n/img02.jpg',
      'title': 'Cunsultancy',
      'service': 'Finance Managment'

    },
    {
      'image': 'https://i.ibb.co/Qp004bP/img03.jpg',
      'title': 'Cunsultancy',
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
            <SwiperSlide >
              <div className="relative ">
                <img className="hover:scale-110 duration-300 " src={d.image} alt="" />

                <div className="relative w-full h-full bg-red-400">
                  <div className="absolute transition-all duration-300 text-left bottom-0 left-0 text-white pl-2 md:p-5" >
                    <p className="text-sm hover:text-primary transition-all duration-500 font-semibold cursor-pointer">{d.title}</p>
                    <h3 className="text-lg md:text-2xl hover:text-primary font-semibold transition-all duration-500  cursor-pointer">{d.service}</h3>

                    <div class="flex items-center lg:mb-5">
                      <i class=" bg-gradient-to-r from-[rgba(237,28,35)] to-[#ed541c] rounded-full mr-2 color-black p-2 md:p-4 "><IoIosEye /></i>
                      <a className="text-sm md:text-lg hover:text-primary transition-all duration-300 " href="_#">View Details</a>
                    </div>

                  </div>
                </div>

              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
}
