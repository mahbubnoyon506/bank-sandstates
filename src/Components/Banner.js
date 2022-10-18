import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./components.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Container, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Banner = () => {

  // banner data

  const banner = [
    {
      'title': 'Take Advice out company',
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/d75pqB1/image2.jpg"
    },
    {
      'title': 'Our vision our Achievment',
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/XJhhtz6/image3.jpg"
    },
    {
      'title': 'Take Advice out company',
      "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic est cupiditate necessitatibus incidunt, minima tempore doloribus! Ducimus, libero sapiente!",
      "image": "https://i.ibb.co/CWK0qkP/image1.jpg"
    },
  ]
  return (
    <div className="mx-auto md:mb-0 sm:mb-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          banner.map((item, index) =>
            <SwiperSlide key={index}>

              <div style={{ width: '100%' }}>

                <div className="relative w-full h-full ">

                  <div className="bg-gray-700/.09 ">
                    <img className="w-full opacity-95 " src={item.image} alt="" />
                  </div>

                  <div className="absolute px-24 pl flex justify-center items-center h-full justify-items-start text-start  text-white z-10 top-0 left-0 ">
                    <div className="align-middle	">
                      <h2 className="text-5xl lg:text-8xl lg:w-3/4 align-middle font-bold ">{item.title}</h2>
                      <p className="text-md my-5 lg:w-3/4 font-semibold">{item.description}</p>
                      <div className="flex justify-start">
                        {/* <button className="btn btn-primary rounded-full">
                        Explore More
                        <NavigateNextIcon />
                      </button> */}

                        <a href="#_" class="relative inline-block text-lg group">
                          <span class="relative z-10 block px-6 py-4 overflow-hidden font-medium leading-tight text-red-800 transition-colors duration-300 ease-out  rounded-full group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-6 py-3 rounded-full bg-primary"></span>
                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span class="relative text-white">Get Started Now</span>
                          </span>
                          <span class="absolute bottom-0 right-0 w-full h-25 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>

                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default Banner;